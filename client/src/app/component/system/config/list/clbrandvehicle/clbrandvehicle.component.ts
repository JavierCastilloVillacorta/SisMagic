import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BrandsVehicle } from 'src/app/models/brandsVehicle';


@Component({
  selector: 'app-clbrandvehicle',
  templateUrl: './clbrandvehicle.component.html',
  styleUrls: ['./clbrandvehicle.component.css']
})
export class ClbrandvehicleComponent implements OnInit {

  @Input() jsonBrandVehicle;
  @Output() clickOupListBrandVehicle = new EventEmitter<any>();
  @Input() filterBrandvehicle;

  constructor() { }

  ngOnInit() {    
  }

  clicListBrVeicle(brandVehicle:BrandsVehicle){
    this.clickOupListBrandVehicle.emit(brandVehicle);
  }

}
