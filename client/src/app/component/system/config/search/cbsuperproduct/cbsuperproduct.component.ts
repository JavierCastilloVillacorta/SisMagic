import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SuperProduct } from 'src/app/models/superProduct';

@Component({
  selector: 'app-cbsuperproduct',
  templateUrl: './cbsuperproduct.component.html',
  styleUrls: ['./cbsuperproduct.component.css']
})
export class CbsuperproductComponent implements OnInit {

  @Output() searchSuperProductText = new EventEmitter<string>();
  @Output() newFormSuperProduct = new EventEmitter<any>();

  filterListSuperProduct = "";
  newSuperProduct : SuperProduct [] = [];

  constructor() { }

  ngOnInit() {
  }

  search(){
    this.searchSuperProductText.emit(this.filterListSuperProduct);
  }

  newSuperProduc(){
    this.newSuperProduct = [];
    this.newFormSuperProduct.emit(this.newSuperProduc)
  }

}
