import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-cfcategories',
  templateUrl: './cfcategories.component.html',
  styleUrls: ['./cfcategories.component.css']
})
export class CfcategoriesComponent implements OnInit {

  @Input() datosCategory;
  @Output() saveCategory = new EventEmitter<any>();
  category : Category[];

  validForm = true;
  valNameCategory = true;
  valCodeCategory = true;

  constructor() { }

  ngOnInit() {
    this.resetInput();
  }

  resetInput(){
    this.datosCategory = [];
    this.datosCategory.stateCategory = 1;
    this.datosCategory.btnName = "Guardar";
  }

  // Guardar Categoria
  onSaveCategory(){
    
    this.validForm = this.valForm();

    if(this.validForm){
      
      if(this.datosCategory.btnName == "Guardar"){
        
        this.datosCategory.idCategory = 5;

        this.category =[{
          idCategory: this.datosCategory.idCategory,
          nameCategory: this.datosCategory.nameCategory,
          descriptionCategory: this.datosCategory.descriptionCategory,
          codeCategory: this.datosCategory.codeCategory,
          stateCategory: this.datosCategory.stateCategory
        }];
        this.saveCategory.emit(this.category);
        this.resetInput();
      }else{
        alert("Modificar ccat");
      }


      
    }

  }

  valForm(){
    
    if(this.datosCategory.nameCategory == undefined || this.datosCategory.nameCategory == ""){
      this.valNameCategory = false;
    }else{
      this.valNameCategory = true;
    }

    if(this.datosCategory.codeCategory == undefined || this.datosCategory.codeCategory == ""){
      this.valCodeCategory = false;
    }else{
      this.valCodeCategory = true;
    }

    if(this.valNameCategory == true && this.valCodeCategory == true){
      return true;
    }else{
      return false;
    }


  }

}
