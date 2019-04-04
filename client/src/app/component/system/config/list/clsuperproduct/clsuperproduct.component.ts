import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SuperProduct } from 'src/app/models/superProduct';

@Component({
  selector: 'app-clsuperproduct',
  templateUrl: './clsuperproduct.component.html',
  styleUrls: ['./clsuperproduct.component.css']
})
export class ClsuperproductComponent implements OnInit {

  @Output() clickOupSuperProduct = new EventEmitter<any>();
  @Input() jsonSuperProduct;
  @Input() filterSuperProductText;


  constructor() { }

  ngOnInit() {
  }

  clicListSuperProduct(superProduct:SuperProduct){
    this.clickOupSuperProduct.emit(superProduct);
  }

}
