import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SuperProduct } from 'src/app/models/superProduct';

@Component({
  selector: 'app-cfsuperproduct',
  templateUrl: './cfsuperproduct.component.html',
  styleUrls: ['./cfsuperproduct.component.css']
})
export class CfsuperproductComponent implements OnInit {

  @Input() datosSuperProduct;
  @Output() saveSuperProduct = new EventEmitter<any>();

  superProduct: SuperProduct[];

  validForm = true;
  valNameSuper = true;
  valCodIntern = true;

  constructor() { }

  ngOnInit() {
    this.resetInput();
  }

  resetInput(){
    this.datosSuperProduct = [];
    this.datosSuperProduct.stateSuper = 1;
    this.datosSuperProduct.btnName = "Guardar";
  }

  onSaveSuperProduct(){

    this.validForm = this.valForm();

    if (this.validForm) {
      if(this.datosSuperProduct.btnName == "Guardar"){

        this.datosSuperProduct.idSuper = 1;

        this.superProduct = [{
          idSuper: this.datosSuperProduct.idSuper,
          nameSuper: this.datosSuperProduct.nameSuper,
          descriptionSuper: this.datosSuperProduct.descriptionSuper,
          stateSuper: this.datosSuperProduct.stateSuper,
          codIntern: this.datosSuperProduct.codIntern
        }];
        this.saveSuperProduct.emit(this.superProduct);
        this.resetInput();
      }else{
        alert("Modificar");
      }
      
    }

  }

  valForm(){

    if(this.datosSuperProduct.nameSuper == undefined || this.datosSuperProduct.nameSuper == ""){
      this.valNameSuper = false;
    }else{
      this.valNameSuper = true;
    }

    if(this.datosSuperProduct.codIntern == undefined || this.datosSuperProduct.codIntern == ""){
      this.valCodIntern = false;
    }else{
      this.valCodIntern = true;
    }

    if(this.valNameSuper == true && this.valCodIntern == true){
      return true;
    }else{
      return false;
    }

  }

}
