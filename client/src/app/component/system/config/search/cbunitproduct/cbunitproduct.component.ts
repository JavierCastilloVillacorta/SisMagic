import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UnitProduct } from 'src/app/models/unitProduct';

@Component({
  selector: 'app-cbunitproduct',
  templateUrl: './cbunitproduct.component.html',
  styleUrls: ['./cbunitproduct.component.css']
})
export class CbunitproductComponent implements OnInit {

  @Output() searchUnitProductText = new EventEmitter<string>();
  @Output() newFormUnitProduct = new EventEmitter<any>();

  filterLisUnitProduct = "";
  newUnitProduct: UnitProduct[] = [];

  constructor() { }

  ngOnInit() {
  }

  search(){
    this.searchUnitProductText.emit(this.filterLisUnitProduct);
  }

  newUnitProd(){
    this.newUnitProduct = [];
    this.newFormUnitProduct.emit(this.newUnitProduct)
  }

}
