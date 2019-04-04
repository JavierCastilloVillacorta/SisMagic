import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Vehicles } from 'src/app/models/vehicles';

@Component({
  selector: 'app-cbvehicle',
  templateUrl: './cbvehicle.component.html',
  styleUrls: ['./cbvehicle.component.css']
})
export class CbvehicleComponent implements OnInit {

  @Output() searchVehicleText = new EventEmitter<string>();
  @Output() newFormVehicle = new EventEmitter<any>();

  filterLisVehicle = "";
  newVehicle : Vehicles[] = [];

  constructor() { }

  ngOnInit() {
  }

  search(){
    this.searchVehicleText.emit(this.filterLisVehicle);
  }

  newVehic(){
    this.newVehicle = [];
    this.newFormVehicle.emit(this.newVehicle);
  }

}
