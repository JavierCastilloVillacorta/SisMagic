import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { BrandsProducts } from 'src/app/models/brandsProduct';

@Component({
  selector: 'app-cfbrands',
  templateUrl: './cfbrands.component.html',
  styleUrls: ['./cfbrands.component.css']
})
export class CfbrandsComponent implements OnInit {

  @Input() datosbrandProduct;
  @Output() saveBrandProduct = new EventEmitter<any>();
  brandProduct : BrandsProducts[];

  validForm = true;
  valNameBrand = true;
  valCodeBrand = true;

  constructor() { }

  ngOnInit() {
    this.resetInput();
  }

  resetInput(){
    this.datosbrandProduct = [];
    this.datosbrandProduct.stateBrand = 1;
    this.datosbrandProduct.btnName = "Guardar";
  }

  // guardar Marca Producto
  onSaveBrandProduct(){
    
    this.validForm = this.valForm();

    if(this.validForm){
      
      if(this.datosbrandProduct.btnName == "Guardar"){
  
        this.datosbrandProduct.idBrand = 6;

        this.brandProduct=[{
          idBrand: this.datosbrandProduct.idBrand,
          nameBrand: this.datosbrandProduct.nameBrand,
          descriptionBrand: this.datosbrandProduct.descriptionBrand,
          codeBrand: this.datosbrandProduct.codeBrand,
          stateBrand: this.datosbrandProduct.stateBrand,
        }];
        this.saveBrandProduct.emit(this.brandProduct);
        this.resetInput()
      }else{
        alert("Modificar Form")
      }

      
    }


  }

  valForm(){
    
    if(this.datosbrandProduct.nameBrand == undefined || this.datosbrandProduct.nameBrand == ""){
      this.valNameBrand = false;
    }else{
      this.valNameBrand = true;
    }

    if(this.datosbrandProduct.codeBrand == undefined || this.datosbrandProduct.codeBrand == ""){
      this.valCodeBrand = false;
    }else{
      this.valCodeBrand = true;
    }

    if(this.valNameBrand == true && this.valCodeBrand == true){
      return true;
    }else{
      return false;
    }



  }

}
