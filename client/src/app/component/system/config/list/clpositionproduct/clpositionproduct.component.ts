import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PositionproductService } from 'src/app/services/system/config/positionproduct/positionproduct.service';

@Component({
  selector: 'app-clpositionproduct',
  templateUrl: './clpositionproduct.component.html',
  styleUrls: ['./clpositionproduct.component.css']
})
export class ClpositionproductComponent implements OnInit {

  @Input() jsonPositionProduct;
  @Input() filterPositionProductText;
  @Output() clickOupListPositionProduct = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  clicListPositionProduct(positionProduct:PositionproductService){
    this.clickOupListPositionProduct.emit(positionProduct);
  }

}
