import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PositionProduct } from 'src/app/models/positionproduct';

@Component({
  selector: 'app-cbpositionproduct',
  templateUrl: './cbpositionproduct.component.html',
  styleUrls: ['./cbpositionproduct.component.css']
})
export class CbpositionproductComponent implements OnInit {

  @Output() searchPositionProduct = new EventEmitter<string>();
  @Output() newFormPositionProduct = new EventEmitter<any>();

  filterLisPositionProduct = "";
  newPositionProduct : PositionProduct[] = [];

  constructor() { }

  ngOnInit() {
  }

  search(){
    this.searchPositionProduct.emit(this.filterLisPositionProduct);
  }

  newPosProduct(){
    this.newPositionProduct = [];
    this.newFormPositionProduct.emit(this.newPositionProduct);
  }

}
