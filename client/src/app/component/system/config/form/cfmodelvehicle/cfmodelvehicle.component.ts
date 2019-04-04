import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ModelVehicle } from 'src/app/models/modelVehicle';

@Component({
  selector: 'app-cfmodelvehicle',
  templateUrl: './cfmodelvehicle.component.html',
  styleUrls: ['./cfmodelvehicle.component.css']
})
export class CfmodelvehicleComponent implements OnInit {

  @Input() datosModelVehicle;
  @Output() saveModuleVehicle = new EventEmitter<any>();

  validForm = true;
  valNameModel = true;
  modelVehicle : ModelVehicle[] = [];

  constructor() { }

  ngOnInit() {
    this.resetInput();
  }

  resetInput(){
    this.datosModelVehicle = [];
    this.datosModelVehicle.btnName = "Guardar";
  }

  onSaveModelVehicle(){

    this.validForm = this.valForm();

    if (this.datosModelVehicle) {

      if (this.datosModelVehicle.btnName == "Guardar") {

        this.datosModelVehicle.idModel = 1;
        this.modelVehicle = [{
          idModel: this.datosModelVehicle.idModel,
          nameModel: this.datosModelVehicle.nameModel,
          descriptionModel: this.datosModelVehicle.descriptionModel
        }];
        this.saveModuleVehicle.emit(this.modelVehicle);
        this.resetInput();
      } else {
        alert("Modificar")
      }
    }
    

  }

  valForm(){
    if(this.datosModelVehicle.nameModel == undefined || this.datosModelVehicle.nameModel == ""){
      this.valNameModel = false;
    }else{
      this.valNameModel = true;
    }

    if(this.valNameModel == true){
      return true;
    }else{
      return false;
    }

  }

}
