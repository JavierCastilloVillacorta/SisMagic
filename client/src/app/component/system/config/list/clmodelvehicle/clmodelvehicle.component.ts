import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ModelVehicle } from 'src/app/models/modelVehicle';

@Component({
  selector: 'app-clmodelvehicle',
  templateUrl: './clmodelvehicle.component.html',
  styleUrls: ['./clmodelvehicle.component.css']
})
export class ClmodelvehicleComponent implements OnInit {

  @Input() jsonModelVehicle;
  @Output() clickOupListModelVehicle = new EventEmitter<any>();
  @Input() filterModelVehicle;

  constructor() { }

  ngOnInit() {
    console.log(this.jsonModelVehicle);
    
  }

  clicListModelVehicle(modelVehicle:ModelVehicle){
    this.clickOupListModelVehicle.emit(modelVehicle);
  }

}
