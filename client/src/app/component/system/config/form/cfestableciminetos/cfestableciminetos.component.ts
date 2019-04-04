import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Store } from 'src/app/models/store';
import { SestablishmentsService } from 'src/app/services/system/config/establishments/sestablishments.service';

@Component({
  selector: 'app-cfestableciminetos',
  templateUrl: './cfestableciminetos.component.html',
  styleUrls: ['./cfestableciminetos.component.css']
})
export class CfestableciminetosComponent implements OnInit {

  fileToUpload: File = null;
  @Output() newStore = new EventEmitter<any>();
  store : Store[];
  @Output() neweStablecerMatrix = new EventEmitter<any>();
  establecerMatrix: Store[];
  validForm = true;
  @Input() datosStore;
  @Input() establecerMatrixf;


  captionImg = "Matriz"
  valName = true;
  valRuc = true
  valAddress = true;
  valMobile = true;
  valPhone = true;
  valMatrix = true;

  constructor(private sestablishmentsService: SestablishmentsService ) { }

  ngOnInit() {
    this.resetInput();
  }

  resetInput(){
    this.datosStore = [];
    this.datosStore.idType = 1;
    this.datosStore.idMatrix = 0;
    this.datosStore.stateStore = 1;
    this.datosStore.btnName = "Guardar";
    if(this.datosStore.imageStore == undefined || this.datosStore.imageStore == "" ){
      this.datosStore.imageStore = "../assets/img/img-default.jpg";
    }
  }
  
  // Tipo de empresa
  tipoCompany(event){
    this.datosStore.idType = event.target.value;
  }

  // Envio Formulario
  onSaveStore(){

    this.validForm = this.valForm();

    if(this.datosStore.btnName == "Guardar"){
      // Guardar de formularo
      if(this.validForm){
  
        if(this.fileToUpload != null){
          this.sestablishmentsService.postFile(this.captionImg,this.fileToUpload);
          this.datosStore.imageStore = this.fileToUpload.name;
        }else{
          this.datosStore.imageStore = "../assets/img/img-default.jpg";
        }
    
        if(this.datosStore.idType == 1){
          this.datosStore.idStore = 3;
          this.datosStore.idMatrix = 0;
          this.establecerMatrix =[{ 
            idStore: this.datosStore.idStore,
            nameStore: this.datosStore.nameStore, 
            rucStore: this.datosStore.rucStore, 
            addressStore : this.datosStore.addressStore,
            mobileStore : this.datosStore.mobileStore,
            stateStore: this.datosStore.stateStore,
            imageStore: this.datosStore.imageStore,
            phoneStore: this.datosStore.phoneStore,
            idMatrix: this.datosStore.idMatrix,
            idType: this.datosStore.idType
           }]
          this.neweStablecerMatrix.emit(this.establecerMatrix);
          this.resetInput();
        }else{
          this.captionImg = "sucursal"
          this.datosStore.idStore = 6;
          this.store =[{ 
            idStore: this.datosStore.idStore,
            nameStore: this.datosStore.nameStore, 
            rucStore: this.datosStore.rucStore, 
            addressStore : this.datosStore.addressStore,
            mobileStore : this.datosStore.mobileStore,
            stateStore: this.datosStore.stateStore,
            imageStore: this.datosStore.imageStore,
            phoneStore: this.datosStore.phoneStore,
            idMatrix: this.datosStore.idMatrix,
            idType: this.datosStore.idType
           }] 
           this.newStore.emit(this.store);
           this.resetInput();
        }
      }
  
    }else{
      // Editar Formulario
      alert("Editar " +this.datosStore.idStore)
      
    }
    
  }

  // Imagen
  handleFileInput(file: FileList){
    this.fileToUpload = file.item(0);
    var reader = new FileReader();
    reader.onload = (event: any) =>{
      this.datosStore.imageStore = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);

  }

  // validacion formulario
  valForm(){
    if(this.datosStore.nameStore == undefined || this.datosStore.nameStore == ""){
      this.valName = false;
    }else{
      this.valName = true;
    }

    if(this.datosStore.rucStore == undefined || this.datosStore.rucStore == ""){
      this.valRuc = false;
    }else{
      this.valRuc = true;
    }

    if(this.datosStore.addressStore == undefined || this.datosStore.addressStore == ""){
      this.valAddress = false;
    }else{
      this.valAddress = true;
    }

    if(this.datosStore.mobileStore == undefined || this.datosStore.mobileStore == ""){
      this.valMobile = false;
    }else{
      this.valMobile = true;
    }

    if(this.datosStore.phoneStore == undefined || this.datosStore.phoneStore == ""){
      this.valPhone = false;
    }else{
      this.valPhone = true;
    }

    if( (this.datosStore.idMatrix == undefined || this.datosStore.idMatrix == 0) &&  this.datosStore.idType == 2){
      this.valMatrix = false;
    }else{
      this.valMatrix = true;
    }


    if(this.valName == true && this.valRuc == true && this.valAddress == true && this.valMobile == true && this.valPhone == true && this.valMatrix == true  ){
      return true
    }else{
      return false;
    }
  
  }




}
