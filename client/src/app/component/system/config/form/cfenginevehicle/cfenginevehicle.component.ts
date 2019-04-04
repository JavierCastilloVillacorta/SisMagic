import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EngineVehicle } from 'src/app/models/engineVehicle';

@Component({
  selector: 'app-cfenginevehicle',
  templateUrl: './cfenginevehicle.component.html',
  styleUrls: ['./cfenginevehicle.component.css']
})
export class CfenginevehicleComponent implements OnInit {

  @Input() datosEngineVehicle;
  @Output() saveEngineVehicle = new EventEmitter<any>();

  engineVehicle: EngineVehicle[];


  validForm = true;
  valNameEngine = true;
  valValveEngine = true;

  constructor() { }

  ngOnInit() {
    this.resetInput();
  }

  resetInput(){
    this.datosEngineVehicle = [];
    this.datosEngineVehicle.btnName = "Guardar";
  }

  onSaveEngineV(){
    this.validForm = this.valForm();

    if(this.validForm){

      if(this.datosEngineVehicle.btnName == "Guardar"){

        this.datosEngineVehicle.idEngine = 8;

        this.engineVehicle = [{
          idEngine: this.datosEngineVehicle.idEngine,
          nameEngine: this.datosEngineVehicle.nameEngine,
          valveEngine: this.datosEngineVehicle.valveEngine
        }]
        this.saveEngineVehicle.emit(this.engineVehicle);
        this.resetInput();
      }else{
        alert("Modificar");
      }

    }

  }

  valForm(){

    if (this.datosEngineVehicle.nameEngine == undefined || this.datosEngineVehicle.nameEngine == ""){
      this.valNameEngine = false;
    } else {
      this.valNameEngine = true;
    }

    if (this.datosEngineVehicle.valveEngine == undefined || this.datosEngineVehicle.valveEngine == ""){
      this.valValveEngine = false;
    } else {
      this.valValveEngine = true;
    }

    if(this.valNameEngine == true && this.valValveEngine == true){
      return true;
    }else{
      return false;
    }


  }

}
