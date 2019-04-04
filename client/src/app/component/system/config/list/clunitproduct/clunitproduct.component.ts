import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UnitProduct } from 'src/app/models/unitProduct';

@Component({
  selector: 'app-clunitproduct',
  templateUrl: './clunitproduct.component.html',
  styleUrls: ['./clunitproduct.component.css']
})
export class ClunitproductComponent implements OnInit {


  @Input() jsonUnitProduct;
  @Input() filterUnitProductText;
  @Output() clickOupListUnitProduct = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  clicListUnitProd(unitProduct:UnitProduct){
    this.clickOupListUnitProduct.emit(unitProduct);
  }

}
