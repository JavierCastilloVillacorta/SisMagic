import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { EngineVehicle } from 'src/app/models/engineVehicle';

@Component({
  selector: 'app-cbenginevehicle',
  templateUrl: './cbenginevehicle.component.html',
  styleUrls: ['./cbenginevehicle.component.css']
})
export class CbenginevehicleComponent implements OnInit {

  @Output() searchEngineVehicletext = new EventEmitter<string>();
  @Output() newFormEngineVehicle = new EventEmitter<any>();

  filterLisEngineVehicle ="";
  newEngineVehicle: EngineVehicle[] = [];

  constructor() { }

  ngOnInit() {
  }

  search(){
    this.searchEngineVehicletext.emit(this.filterLisEngineVehicle);
  }

  newEngineV(){
    this.newEngineVehicle = [];
    this.newFormEngineVehicle.emit(this.newEngineVehicle);
  }

}
