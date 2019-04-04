import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UnitProduct } from 'src/app/models/unitProduct';

@Component({
  selector: 'app-cfunitproduct',
  templateUrl: './cfunitproduct.component.html',
  styleUrls: ['./cfunitproduct.component.css']
})
export class CfunitproductComponent implements OnInit {

  @Input() datosUnitProduct;
  @Output() saveUnitProduct = new EventEmitter<any>();

  unitProduct : UnitProduct[];

  validForm = true;
  valNameUnity = true;
  valCodeUnity = true;
  valQuantityUnity = true;

  constructor() { }

  ngOnInit() {
    this.resetInput();
  }

  resetInput(){
    this.datosUnitProduct = [];
    this.datosUnitProduct.btnName = "Guardar";
  }

  onSaveUnitProduct(){
    this.validForm = this.valForm();
    if(this.validForm){

      if(this.datosUnitProduct.btnName == "Guardar"){

        this.datosUnitProduct.idUnity = 5;

        this.unitProduct=[{
          idUnity: this.datosUnitProduct.idUnity,
          nameUnity: this.datosUnitProduct.nameUnity,
          codeUnity: this.datosUnitProduct.codeUnity,
          descriptionUnity: this.datosUnitProduct.descriptionUnity,
          quantityUnity: this.datosUnitProduct.quantityUnity
        }]
        this.saveUnitProduct.emit(this.unitProduct);
        this.resetInput();
      }else{
        alert("Modificar")
      }

    }
    
  }


  valForm(){

    if(this.datosUnitProduct.nameUnity == undefined || this.datosUnitProduct.nameUnity == ""){
      this.valNameUnity = false;
    }else{
      this.valNameUnity = true;
    }

    if(this.datosUnitProduct.codeUnity == undefined || this.datosUnitProduct.codeUnity == ""){
      this.valCodeUnity = false;
    }else{
      this.valCodeUnity = true;
    }

    if(this.datosUnitProduct.quantityUnity == undefined || this.datosUnitProduct.quantityUnity == ""){
      this.valQuantityUnity = false;
    }else{
      this.valQuantityUnity = true;
    }

    if(this.valNameUnity == true && this.valCodeUnity == true && this.valQuantityUnity == true){
      return true;
    }else{
      return false;
    }

  
  }

}
