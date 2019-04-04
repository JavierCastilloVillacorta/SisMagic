import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/products';

@Component({
  selector: 'app-clproducts',
  templateUrl: './clproducts.component.html',
  styleUrls: ['./clproducts.component.css']
})
export class ClproductsComponent implements OnInit {

  @Input() jsonProduct;
  @Input() jsonVehicleProduct;
  @Input() jsonEquivalenceProduct;
  @Input() jsonGalleryProduct;
  @Input() filterProductText;
  @Input() newfilterProductText;

  @Output() newFormProduct = new EventEmitter<any>();

  @Output() clickOupListProduct = new EventEmitter<any>();
  @Output() clickOupCopyProduct1 = new EventEmitter<any>();
  @Output() clickOupCopyProduct2 = new EventEmitter<any>();
  @Output() clickOupCopyProduct3 = new EventEmitter<any>();

  @Output() clickOupCopyProEquivalence = new EventEmitter<any>();
  @Output() clickOupCopyProVehicle = new EventEmitter<any>();
  @Output() clickOupCopyProGallery = new EventEmitter<any>();

  newProduct: Product[] =[];

  constructor() { }

  ngOnInit() {       
  }


  newProd(){
    this.newProduct =[];
    this.newFormProduct.emit(this.newProduct);
  }


  clickListProduct(product:Product){
    this.clickOupListProduct.emit(product);
  }

  clickCopyProduct1(product:Product){   
    let duplicateObject = JSON.parse(JSON.stringify(product));
    this.clickOupCopyProduct1.emit(duplicateObject);
  }

  clickCopyProduct2(product:Product){
    let duplicateObject = JSON.parse(JSON.stringify(product));
    this.clickOupCopyProduct2.emit(duplicateObject);
  }

  clickCopyProduct3(product:Product){
    let duplicateObject = JSON.parse(JSON.stringify(product));
    this.clickOupCopyProduct3.emit(duplicateObject);
  }

  clickCopyProEquivalence(product:Product){
    this.clickOupCopyProEquivalence.emit(product);
  }

  clickCopyProVehicle(product:Product){
    this.clickOupCopyProVehicle.emit(product);
  }
  clickCopyProGallery(product:Product){
    this.clickOupCopyProGallery.emit(product);
  }

}
