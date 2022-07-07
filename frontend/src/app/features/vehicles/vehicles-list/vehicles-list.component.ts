import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, Params, Event, NavigationEnd } from '@angular/router';
import { DataSource } from '@angular/cdk/collections';
import { combineLatest, Subscription } from 'rxjs';
import { map } from 'rxjs/operators'
// material
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
// services
import { DatastoreService } from '@core/services/datastore.service'
// models
import { Vehicle } from '@models/vehicle.model'
import { VehiclesDataSource } from './vehicles.datasource';
import { LocationModalComponent } from '@shared/components/location-modal/location-modal.component';

@Component({
  selector: 'app-vehicles-vehicles-list',
  templateUrl: './vehicles-list.component.html',
  styleUrls: ['./vehicles-list.component.scss']
})
export class VehiclesListComponent implements AfterViewInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Vehicle>;

  searchText: string
  searchLocation: string

  dataSource: VehiclesDataSource;
  paramsChangeSubscription: Subscription;

  displayedColumns: string[] = ['index', 'vin', 'stock', 'year', 'name', 'price', 'location', 'status'];
  
  availablePageSizes: number[] = [5, 10, 20]

  defaultPageSize: number = 10
  defaultSort: string = 'name_asc'

  sortActive: string = 'name'
  sortDirection: 'asc'|'desc' = 'asc'

  constructor(
    private router: Router,
    private datastoreService: DatastoreService,
    private route: ActivatedRoute,
    public dialog: MatDialog
  ) {
    this.dataSource = new VehiclesDataSource(this.datastoreService);
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
    this.paramsChangeSubscription = combineLatest(this.route.params, this.route.queryParams).pipe(
       // combine parameters from route and queryParams
       map(([params, queryParams]) => ({...params, ...queryParams}))
    ).subscribe( params => {
      this.dataSource.loadData(
        !!params['page'] ? params['page'] : 1,
        !!params['perPage'] ? params['perPage'] : this.defaultPageSize,
        !!params['sort'] ? params['sort'] : this.defaultSort
      )
    })
  }

  changePage() {
    let params: Params = {}
    let sort = [this.sort.active, this.sort.direction].join('_')
    if (this.paginator.pageIndex > 0) {
      params['page'] = this.paginator.pageIndex + 1
    }
    if (this.paginator.pageSize != this.defaultPageSize) {
      params['perPage'] = this.paginator.pageSize
    }
    if (sort != this.defaultSort) {
      params['sort'] = sort
    }
    this.router.navigate(['/vehicles'], { queryParams: params })
  }

  changeSort() {
    this.paginator.pageIndex = 0
    this.changePage()
  }

  openLocationDialog( location ) {
    this.dialog.open(LocationModalComponent , { width: '400px' , data : location } );
  }

  ngOnDestroy() {
    this.paramsChangeSubscription.unsubscribe()
  }

}
