import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PositionProduct } from 'src/app/models/positionproduct';

@Component({
  selector: 'app-cfpositionproduct',
  templateUrl: './cfpositionproduct.component.html',
  styleUrls: ['./cfpositionproduct.component.css']
})
export class CfpositionproductComponent implements OnInit {

  @Input() datosPositionProduct;
  @Output() savePositionProduct = new EventEmitter<any>();
  positionProduct : PositionProduct[];


  validForm = true;
  valNamePosition = true;

  constructor() { }

  ngOnInit() {
    this.resetInput();
  }

  resetInput(){
    this.datosPositionProduct = [];
    this.datosPositionProduct.btnName = "Guardar";
  }
  

  onSavePositionProduct(){
    this.validForm = this.valForm();
    
    if (this.validForm) {
      if (this.datosPositionProduct.btnName == "Guardar") {

        this.datosPositionProduct.idPosition = 1;

        this.positionProduct = [{
          idPosition: this.datosPositionProduct.idPosition,
          descriptionPosition: this.datosPositionProduct.descriptionPosition,
          namePosition: this.datosPositionProduct.namePosition,
        }];

        this.savePositionProduct.emit(this.positionProduct);
        this.resetInput();
      } else {
        alert("Modificar")
      }
    }


  }

  valForm(){
    if(this.datosPositionProduct.namePosition == undefined || this.datosPositionProduct.namePosition == ""){
      this.valNamePosition = false;
    }else{
      this.valNamePosition = true;
    }

    if(this.valNamePosition == true){
      return true;
    }else{
      return false;
    }

  }

  

}
