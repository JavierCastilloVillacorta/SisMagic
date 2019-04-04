import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BrandsVehicle } from 'src/app/models/brandsVehicle';
import { BrandvehicleService } from 'src/app/services/system/config/brandvehicle/brandvehicle.service';

@Component({
  selector: 'app-cfbrandvehicle',
  templateUrl: './cfbrandvehicle.component.html',
  styleUrls: ['./cfbrandvehicle.component.css']
})
export class CfbrandvehicleComponent implements OnInit {

  @Input() datosBrandVehicle;
  @Output() saveBrandVehicle = new EventEmitter<any>();

  brandsVehicle : BrandsVehicle [] = [];
  fileToUpload: File = null;

  captionImg = "Logo"
  validForm = true;
  valNameBrandV = true;
  valLetterBrandV = true;
  valcodeBrandV = true;


  constructor(private brandvehicleService: BrandvehicleService) { }

  ngOnInit() {
    this.resetInput();
  }

  resetInput(){
    this.datosBrandVehicle = [];
    this.datosBrandVehicle.btnName = "Guardar";
    if(this.datosBrandVehicle.imgBrandV == undefined || this.datosBrandVehicle.imgBrand == "" ){
      this.datosBrandVehicle.imgBrandV = "../assets/img/img-default.jpg";
    }
  }

  onSaveBrandVehicle(){
    
    this.validForm = this.valForm();

    if(this.validForm){
        
      if(this.fileToUpload != null){
        //this.brandvehicleService.postFile(this.captionImg,this.fileToUpload);
        this.datosBrandVehicle.imgBrandV = this.fileToUpload.name;
      }else{
        this.datosBrandVehicle.imgBrandV = "../assets/img/img-default.jpg";
      }
    

      if (this.datosBrandVehicle.btnName == "Guardar") {
        this.datosBrandVehicle.idBrandV = 1;
        this.brandsVehicle =[{
          idBrandV: this.datosBrandVehicle.idBrandV,
          nameBrandV: this.datosBrandVehicle.nameBrandV,
          imgBrandV: this.datosBrandVehicle.imgBrandV,
          descriptionBrandV: this.datosBrandVehicle.descriptionBrandV,
          letterBrandV: this.datosBrandVehicle.letterBrandV,
          codeBrandV: this.datosBrandVehicle.codeBrandV
        }]

        this.saveBrandVehicle.emit(this.brandsVehicle);
        this.resetInput();
        
      } else {
        alert("Modificar")
      }

    }


  }


  // Imagen
  handleFileInput(file: FileList){
    this.fileToUpload = file.item(0);
    var reader = new FileReader();
    reader.onload = (event: any) =>{
      this.datosBrandVehicle.imgBrandV = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
  }

  // Validacion Formulario
  valForm(){
    if(this.datosBrandVehicle.nameBrandV == undefined || this.datosBrandVehicle.nameBrandV == ""){
      this.valNameBrandV = false;
    }else{
      this.valNameBrandV = true;
    }

    if(this.datosBrandVehicle.letterBrandV == undefined || this.datosBrandVehicle.letterBrandV == ""){
      this.valLetterBrandV = false;
    }else{
      this.valLetterBrandV = true;
    }

    if(this.datosBrandVehicle.codeBrandV == undefined || this.datosBrandVehicle.codeBrandV == ""){
      this.valcodeBrandV = false;
    }else{
      this.valcodeBrandV = true;
    }

    if(this.valNameBrandV == true && this.valLetterBrandV == true && this.valcodeBrandV == true){
      return true
    }else{
      return false;
    }





  }



}
