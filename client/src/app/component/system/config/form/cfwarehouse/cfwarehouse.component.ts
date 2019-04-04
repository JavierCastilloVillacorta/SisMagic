import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Store } from 'src/app/models/store';

@Component({
  selector: 'app-cfwarehouse',
  templateUrl: './cfwarehouse.component.html',
  styleUrls: ['./cfwarehouse.component.css']
})
export class CfwarehouseComponent implements OnInit {


  @Input() datosWarehouse;
  @Input() establecerMatrixf;
  @Output() newFormWareHouse =  new EventEmitter<any>();;

  validForm = true;

  valName = true;
  valAddress = true;
  valMobile = true;
  valPhone = true;
  valMatrix = true;

  storeWarehouse : Store[];

 

  constructor() { }

  ngOnInit() {
    this.resetInput();  
  }

  resetInput(){
    this.datosWarehouse = [];
    this.datosWarehouse.stateStore = 1;
    this.datosWarehouse.idMatrix = 0;
    this.datosWarehouse.btnName = "Guardar";
  }

  onSaveWareHouse(){
    
    this.validForm = this.valdForm();
    if(this.validForm){
      if(this.datosWarehouse.btnName == "Guardar"){
        this.datosWarehouse.idStore = 13;
        this.datosWarehouse.rucStore = "";
        this.datosWarehouse.imageStore = "";
        this.datosWarehouse.idType = 3;
  
        this.storeWarehouse =[{
          idStore: this.datosWarehouse.idStore,
          nameStore: this.datosWarehouse.nameStore, 
          rucStore: this.datosWarehouse.rucStore, 
          addressStore : this.datosWarehouse.addressStore,
          mobileStore : this.datosWarehouse.mobileStore,
          stateStore: this.datosWarehouse.stateStore,
          imageStore: this.datosWarehouse.imageStore,
          phoneStore: this.datosWarehouse.phoneStore,
          idMatrix: this.datosWarehouse.idMatrix,
          idType: this.datosWarehouse.idType
        }];
        this.newFormWareHouse.emit(this.storeWarehouse );
        this.resetInput();  
     
      }else{
        alert("Editar" + this.datosWarehouse.idStore)

      }
    }

    
  }

  
  valdForm(){
    if(this.datosWarehouse.nameStore == undefined || this.datosWarehouse.nameStore == ""){
      this.valName = false;
    }else{
      this.valName = true;
    }

    if(this.datosWarehouse.addressStore == undefined || this.datosWarehouse.addressStore == ""){
      this.valAddress = false;
    }else{
      this.valAddress = true;
    }

    if(this.datosWarehouse.mobileStore == undefined || this.datosWarehouse.mobileStore == ""){
      this.valMobile = false;
    }else{
      this.valMobile = true;
    }

    if(this.datosWarehouse.phoneStore == undefined || this.datosWarehouse.phoneStore == ""){
      this.valPhone = false;
    }else{
      this.valPhone = true;
    }

    if(this.datosWarehouse.idMatrix == undefined || this.datosWarehouse.idMatrix == 0 ){
      this.valMatrix = false;
    }else{
      this.valMatrix = true;
    }

    if(this.valName == true && this.valAddress == true && this.valMobile == true && this.valPhone == true && this.valMatrix == true ){
      return true;
    }else{
      return false;
    }


  }

}
