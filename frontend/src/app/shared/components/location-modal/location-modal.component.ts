import { Component, Inject } from '@angular/core';

import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-shared-location-modal',
  templateUrl: './location-modal.component.html',
  styleUrls: ['./location-modal.component.scss']
})
export class LocationModalComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data) {}

}
