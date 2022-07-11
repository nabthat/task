import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { BehaviorSubject, Observable, of as observableOf, merge } from 'rxjs';
import { tap, first } from 'rxjs/operators';
import { environment } from '@environments/environment'
// services
import { DatastoreService } from '@core/services/datastore.service'
// models
import { Vehicle } from '@models/vehicle.model'

export class VehiclesDataSource extends DataSource<Vehicle> {

  data: Vehicle[] = [];
  paginator: MatPaginator | undefined;
  sort: MatSort | undefined;

  private dataSubject = new BehaviorSubject<Vehicle[]>([]);
  private loadingSubject = new BehaviorSubject<boolean>(true);

  public loading$ = this.loadingSubject.asObservable();

  constructor(
    private datastoreService: DatastoreService
  ) {
    super();
  }

  connect(): Observable<Vehicle[]> {
    return this.dataSubject.asObservable();
  }

  disconnect(): void {
    this.dataSubject.complete()
    this.loadingSubject.complete();
  }

  loadData(pageNumber: number, pageSize: number, sort: string, filter?: { [key: string]: string } ) {
    
    this.loadingSubject.next(true);
    
    let params = {
      page: {
        number: pageNumber,
        size: pageSize,
      },
      filter: {},
      sort: sort
    }

    if (filter['search']) {
      params['filter']['search'] = filter['search']
    }

    if (filter['status']) {
      params['filter']['status'] = filter['status']
    }

    if (filter['kind']) {
      params['filter']['kind'] = filter['kind']
    }

    this.datastoreService.findAll(Vehicle, params, undefined, environment.apiUrl +  environment.apiPath + "/vehicles").
      pipe(first()).subscribe( (response) => {
        let models = response.getModels()
        let metaData = response.getMeta()
        this.paginator.pageIndex = metaData.meta.page - 1
        this.paginator.length = metaData.meta.total_resources
        this.paginator.pageSize = metaData.meta.resources_per_page
        this.dataSubject.next(models)
        this.loadingSubject.next(false);
    })
  }

}