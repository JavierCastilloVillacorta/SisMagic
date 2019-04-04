import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ModelVehicle } from 'src/app/models/modelVehicle';

@Component({
  selector: 'app-cbmodelvehicle',
  templateUrl: './cbmodelvehicle.component.html',
  styleUrls: ['./cbmodelvehicle.component.css']
})
export class CbmodelvehicleComponent implements OnInit {

  @Output() searchModelVehicleText = new EventEmitter<string>();
  @Output() newFormModelVehicle = new EventEmitter<any>();


  filterListModelV = "";
  newModelVehicle : ModelVehicle[] = [];

  constructor() { }

  ngOnInit() {
  }

  search(){
    this.searchModelVehicleText.emit(this.filterListModelV);
  }

  newModelV(){
    this.newModelVehicle = [];
    this.newFormModelVehicle.emit(this.newModelVehicle);
  }

}
