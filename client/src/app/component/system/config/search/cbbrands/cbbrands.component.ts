import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BrandsProducts } from 'src/app/models/brandsProduct';

@Component({
  selector: 'app-cbbrands',
  templateUrl: './cbbrands.component.html',
  styleUrls: ['./cbbrands.component.css']
})
export class CbbrandsComponent implements OnInit {

  @Output() searchBrandProductText = new EventEmitter<string>();
  @Output() newFormBrandProduct = new EventEmitter<any>();


  filterLisBrandProduct = "";
  newBrandProduct: BrandsProducts[] =[];

  constructor() { }

  ngOnInit() {
  }

  search(){
    this.searchBrandProductText.emit(this.filterLisBrandProduct);
  }

  newBrand(){
    this.newBrandProduct =[];
    this.newFormBrandProduct.emit(this.newBrandProduct);
  }

}
