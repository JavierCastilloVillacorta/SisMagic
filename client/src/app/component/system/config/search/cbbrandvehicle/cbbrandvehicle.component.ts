import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BrandsVehicle } from 'src/app/models/brandsVehicle';

@Component({
  selector: 'app-cbbrandvehicle',
  templateUrl: './cbbrandvehicle.component.html',
  styleUrls: ['./cbbrandvehicle.component.css']
})
export class CbbrandvehicleComponent implements OnInit {
  
  filterLisBrandVehicle = "";
  newBrandVehicle: BrandsVehicle[] = [];

  @Output() searchBrandVehicleText = new EventEmitter<string>();
  @Output() newFormBrandVehicle = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  search(){
    this.searchBrandVehicleText.emit(this.filterLisBrandVehicle);
  }

  newBrandV(){
    this.newBrandVehicle = [];
    this.newFormBrandVehicle.emit(this.newBrandVehicle);
  }

}
