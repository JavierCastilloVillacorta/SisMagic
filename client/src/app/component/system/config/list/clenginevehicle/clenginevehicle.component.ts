import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { EngineVehicle } from 'src/app/models/engineVehicle';

@Component({
  selector: 'app-clenginevehicle',
  templateUrl: './clenginevehicle.component.html',
  styleUrls: ['./clenginevehicle.component.css']
})
export class ClenginevehicleComponent implements OnInit {
  
  @Input() jsonEngineVehicle;
  @Output() clickOupListEngineVehicle = new EventEmitter<any>();
  @Input() filterEngineVehicle

  constructor() { }

  ngOnInit() {
  }

  clickListEngineVeicle(enginevehicle: EngineVehicle){
    this.clickOupListEngineVehicle.emit(enginevehicle);
  }

}
