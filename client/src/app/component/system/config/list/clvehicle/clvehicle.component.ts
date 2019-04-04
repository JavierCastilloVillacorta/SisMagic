import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Vehicles } from 'src/app/models/vehicles';

@Component({
  selector: 'app-clvehicle',
  templateUrl: './clvehicle.component.html',
  styleUrls: ['./clvehicle.component.css']
})
export class ClvehicleComponent implements OnInit {

  @Input() jsonVehicle;
  @Output() clickOupListVehicle = new EventEmitter<any>();
  @Input() filterVehicle;

  constructor() { }

  ngOnInit() {
    console.log(this.filterVehicle);
    
  }

  clickListVehicle(vehicle:Vehicles){
    this.clickOupListVehicle.emit(vehicle);
  }

}
