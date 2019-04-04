import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BrandsService } from 'src/app/services/system/config/brands/brands.service';

@Component({
  selector: 'app-clbrands',
  templateUrl: './clbrands.component.html',
  styleUrls: ['./clbrands.component.css']
})
export class ClbrandsComponent implements OnInit {

  @Input() jsonBrandsProduct;
  @Input() filterBrandText;
  @Output() clickOupBrProduct = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
    
    
  }

  clickListBrProduct(brandsProduct:BrandsService){
    this.clickOupBrProduct.emit(brandsProduct);
  }

}
