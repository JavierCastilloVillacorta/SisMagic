import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ModelVehicle } from 'src/app/models/modelVehicle';
import { BrandsVehicle } from 'src/app/models/brandsVehicle';
import { Gas } from 'src/app/models/gas';
import { EngineVehicle } from 'src/app/models/engineVehicle';
import { Vehicles } from 'src/app/models/vehicles';


@Component({
  selector: 'app-cfvehicle',
  templateUrl: './cfvehicle.component.html',
  styleUrls: ['./cfvehicle.component.css']
})
export class CfvehicleComponent implements OnInit {

  //Json Datos 

  @Input() datosVehicle;
  @Input() jsonGas;
  @Input() jsonBrandVehicle;
  @Input() jsonModelVehicle;
  @Input() jsonEngineVehicle;
  @Output() saveVehicle = new EventEmitter<any>();
  vehicles: Vehicles[];

  //Val Formulario
  validForm = true;
  valNameModel = true;
  valNameBrandV = true;
  valNameGas = true;
  valNameEngine = true;
  valDiameterVehicle = true;
  valCylinderVehicle = true;
  valDisplacementVehicle = true;
  valYearInit = true;
  valYearEnd = true;


  //Abrir Autocomplet
  menuModel = false;
  menuBrand = false;
  menuGas = false;
  menuEngine = false;


  constructor() { }

  ngOnInit() {
    this.resetInputs();
  }

  resetInputs(){
    //Palabras Autocomplet
    this.datosVehicle = [];
    this.datosVehicle.nameModel = "";
    this.datosVehicle.nameBrandV = "";
    this.datosVehicle.nameGas = "";
    this.datosVehicle.nameEngine = "";
    this.datosVehicle.stateVehicle = 1;
    this.datosVehicle.btnName = "Guardar";
  }

  //Guardar Vehiculo

  onSaveVehicle(){
    this.validForm = this.valForm();

    if(this.validForm){

      if(this.datosVehicle.btnName == "Guardar"){
        this.datosVehicle.idVehicle = 5;
        this.vehicles =[{
          idVehicle: this.datosVehicle.idVehicle,
          idModel: this.datosVehicle.idModel,
          idBrandV: this.datosVehicle.idBrandV,
          idGas: this.datosVehicle.idGas,
          idEngine: this.datosVehicle.idEngine,
          diameterVehicle: this.datosVehicle.diameterVehicle,
          cylinderVehicle: this.datosVehicle.cylinderVehicle,
          displacementVehicle: this.datosVehicle.displacementVehicle,
          yearInit: this.datosVehicle.yearInit,
          yearEnd: this.datosVehicle.yearEnd,
          stateVehicle: this.datosVehicle.stateVehicle,
        }]
        this.saveVehicle.emit(this.vehicles);
        this.resetInputs();

      }else{
        alert("Modificar Vehicle");
      }
      
    }

  }




   //Leta Buscar Autocompletar
  rescatadatoModel(modelVehicle: ModelVehicle){
    this.datosVehicle.nameModel = modelVehicle.nameModel;
    this.datosVehicle.idModel = modelVehicle.idModel;
    this.menuModel = !this.menuModel;
  }

  rescatadatoBrand(brandVehicle:BrandsVehicle){
    this.datosVehicle.nameBrandV = brandVehicle.nameBrandV;
    this.datosVehicle.idBrandV = brandVehicle.idBrandV;
    this.menuBrand = !this.menuBrand;
  }

  rescatadatoGas(gas:Gas){
    this.datosVehicle.nameGas = gas.nameGas;
    this.datosVehicle.idGas = gas.idGas;
    this.menuGas = !this.menuGas;
  }

  rescatadatoEngine(engineVehicle:EngineVehicle){
    this.datosVehicle.nameEngine = engineVehicle.nameEngine;
    this.datosVehicle.idEngine = engineVehicle.idEngine;
    this.menuEngine = !this.menuEngine;
  }

  //Cerrar Autocomplet
  toAutoCompModel(){
    this.menuModel = !this.menuModel;
    this.menuBrand = false;
    this.menuGas = false;
    this.menuEngine = false;
  }

  toAutoCompBrand(){
    this.menuBrand = !this.menuBrand;
    this.menuModel = false;
    this.menuGas = false;
    this.menuEngine = false;
  }

  toAutoCompGas(){
    this.menuGas = !this.menuGas;
    this.menuModel = false;
    this.menuBrand = false;
    this.menuEngine = false;
  }

  toAutoCompEngine(){
    this.menuEngine = !this.menuEngine;
    this.menuModel = false;
    this.menuBrand = false;
    this.menuGas = false;
  }

  
  // Cerrar evento escape
  onKeydown(event) {
    if (event.key === "Escape") {
      this.menuModel = false;
      this.menuBrand = false;
      this.menuGas = false;
      this.menuEngine = false;
    }
  }

  // Validar Formulario

  valForm(){

    if(this.datosVehicle.nameModel == undefined || this.datosVehicle.nameModel == ""){
      this.valNameModel = false;
    }else{
      this.valNameModel = true;
    }

    if(this.datosVehicle.nameBrandV == undefined || this.datosVehicle.nameBrandV == ""){
      this.valNameBrandV = false;
    }else{
      this.valNameBrandV = true;
    }

    if(this.datosVehicle.nameGas == undefined || this.datosVehicle.nameGas == ""){
      this.valNameGas = false;
    }else{
      this.valNameGas = true;
    }

    if(this.datosVehicle.nameEngine == undefined || this.datosVehicle.nameEngine == ""){
      this.valNameEngine = false;
    }else{
      this.valNameEngine = true;
    }

    if(this.datosVehicle.diameterVehicle == undefined || this.datosVehicle.diameterVehicle == ""){
      this.valDiameterVehicle = false;
    }else{
      this.valDiameterVehicle = true;
    }

    if(this.datosVehicle.cylinderVehicle == undefined || this.datosVehicle.cylinderVehicle == ""){
      this.valCylinderVehicle = false;
    }else{
      this.valCylinderVehicle = true;
    }
    
    if(this.datosVehicle.displacementVehicle == undefined || this.datosVehicle.displacementVehicle == ""){
      this.valDisplacementVehicle = false;
    }else{
      this.valDisplacementVehicle = true;
    }

    if(this.datosVehicle.yearInit == undefined || this.datosVehicle.yearInit == ""){
      this.valYearInit = false;
    }else{
      this.valYearInit = true;
    }

    if(this.datosVehicle.yearEnd == undefined || this.datosVehicle.yearEnd == ""){
      this.valYearEnd = false;
    }else{
      this.valYearEnd = true;
    }


  if(this.valNameModel == true && this.valNameBrandV == true && this.valNameGas == true  && this.valNameEngine == true && this.valDiameterVehicle == true  && this.valCylinderVehicle == true && this.valDisplacementVehicle == true && this.valYearInit == true && this.valYearEnd == true ){
    return true;
  }else{
    return false;
  }

  

  }
  
  


}