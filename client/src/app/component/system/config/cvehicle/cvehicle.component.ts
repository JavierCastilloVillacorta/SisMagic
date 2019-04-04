import { Component, OnInit } from '@angular/core';
import { Gas } from 'src/app/models/gas';
import { GasService } from 'src/app/services/system/config/gas/gas.service';
import { BrandsVehicle } from 'src/app/models/brandsVehicle';
import { BrandvehicleService } from 'src/app/services/system/config/brandvehicle/brandvehicle.service';
import { ModelVehicle } from 'src/app/models/modelVehicle';
import { ModelvehicleService } from 'src/app/services/system/config/modelvehicle/modelvehicle.service';
import { EngineVehicle } from 'src/app/models/engineVehicle';
import { EnginevehicleService } from 'src/app/services/system/config/enginevehicle/enginevehicle.service';
import { Vehicles } from 'src/app/models/vehicles';
import { VehicleService } from 'src/app/services/system/config/vehicle/vehicle.service';

@Component({
  selector: 'app-cvehicle',
  templateUrl: './cvehicle.component.html',
  styleUrls: ['./cvehicle.component.css']
})
export class CvehicleComponent implements OnInit {

  //Datos Menu

  menuVe = true;
  menuGa = false;
  menuBr = false;
  menuMo = false;
  menuEn = false;

  //variables Json
  jsonGas : Gas[] = [];
  jsonBrandVehicle : BrandsVehicle[] = [];
  jsonModelVehicle: ModelVehicle[] = [];
  jsonEngineVehicle: EngineVehicle[] = [];
  jsonVehicle: Vehicles[] = [];

  // FIltro listas
  filertGas = "";
  filterBrandvehicle = "";
  filterModelVehicle = "";
  filterEngineVehicle = "";
  filterVehicle = "";


  constructor(
    private gasService: GasService,
    private brandvehicleService: BrandvehicleService,
    private modelvehicleService: ModelvehicleService,
    private enginevehicleService: EnginevehicleService,
    private vehicleService:VehicleService
  ) { }

  ngOnInit() {
    this.jsonGas = this.gasService.jsonGas;
    this.jsonBrandVehicle = this.brandvehicleService.jsonBrandVehicle;    
    this.jsonModelVehicle = this.modelvehicleService.jsonModelVehicle;
    this.jsonEngineVehicle = this.enginevehicleService.jsonEngineVehicle;
    this.jsonVehicle = this.vehicleService.jsonVehicle;
    this.jsonNewVehicle(this.jsonGas, this.jsonBrandVehicle, this.jsonModelVehicle, this.jsonEngineVehicle, this.jsonVehicle);

    
  }

  jsonNewVehicle(jsonGas, jsonBrandVehicle, jsonModelVehicle, jsonEngineVehicle, jsonVehicle){

    jsonVehicle.map(x => Object.assign(x, jsonGas.find(y => y.idGas == x.idGas)));
    jsonVehicle.map(x => Object.assign(x, jsonBrandVehicle.find(y => y.idBrandV == x.idBrandV)));
    jsonVehicle.map(x => Object.assign(x, jsonModelVehicle.find(y => y.idModel == x.idModel)));
    jsonVehicle.map(x => Object.assign(x, jsonEngineVehicle.find(y => y.idEngine == x.idEngine)));

  }


  // Datos Formularios
  datosGas : Gas[] =[]
  datosBrandVehicle : BrandsVehicle[] = [];
  datosModelVehicle : ModelVehicle[] = [];
  datosEngineVehicle : EngineVehicle[] = [];
  datosVehicle : Vehicles[] =[];

  



  // Buscadores
  //Combustible
  searchGasText($event){
    this.filertGas = $event
  }
  //Marca vehiculo
  searchBrandVehicleText($event){
    this.filterBrandvehicle = $event;
  }
  // Modelo Vehiculo
  searchModelVehicleText($event){
    this.filterModelVehicle = $event;
  }
  //Motor Vehiculo
  searchEngineVehicletext($event){
    this.filterEngineVehicle = $event;
  }
  //vehiculo
  searchVehicleText($event){
    this.filterVehicle = $event;
  }



  //Click Listado
  //Combustible
  clickOupListGas($event){
    $event.btnName = "Modificar";
    this.datosGas = $event;
  }
  //Marca Vehicle
  clickOupListBrandVehicle($event){
    $event.btnName = "Modificar";
    this.datosBrandVehicle = $event;   
  }
  //Modelo Vehicle
  clickOupListModelVehicle($event){
    $event.btnName = "Modificar";
    this.datosModelVehicle = $event;   
  }
  // Motor vehiculo
  clickOupListEngineVehicle($event){
    $event.btnName = "Modificar";
    this.datosEngineVehicle = $event; 
  } 
  //vehiculo
  clickOupListVehicle($event){
    $event.btnName = "Modificar";
    this.datosVehicle = $event; 
  }


  //Click nuevo Formulario
  //Combustible
  newFormGas($event){
    $event.btnName = "Guardar";
    this.datosGas = $event;
  }
  //Marca Vehiculo
  newFormBrandVehicle($event){
    $event.imgBrandV = "../assets/img/img-default.jpg";
    $event.btnName = "Guardar";
    this.datosBrandVehicle = $event;
  }
  //Modelo vehiculo
  newFormModelVehicle($event){
    $event.btnName = "Guardar";
    this.datosModelVehicle = $event;
  }
  //Motor Vehiculo
  newFormEngineVehicle($event){
    $event.btnName = "Guardar";
    this.datosEngineVehicle = $event;
  }
  //Vehicle
  newFormVehicle($event){
    $event.nameModel = "";
    $event.nameBrandV = "";
    $event.nameGas = "";
    $event.nameEngine = "";
    $event.stateVehicle = 1;
    $event.btnName = "Guardar";
    this.datosVehicle = $event;
  }

  //Click Guardar Formulario
  //Combustible
  SaveGass($event){
    this.jsonGas = this.jsonGas.concat($event);
  }
  // marca vehiculo
  saveBrandVehicle($event){
    this.jsonBrandVehicle = this.jsonBrandVehicle.concat($event);
  }
  //Modulo vehicle
  saveModuleVehicle($event){
    this.jsonModelVehicle = this.jsonModelVehicle.concat($event);
  }
  //Motor Vehicle
  saveEngineVehicle($event){
    this.jsonEngineVehicle = this.jsonEngineVehicle.concat($event);
  }
  //Vehicle
  saveVehicle($event){
    this.jsonVehicle = this.jsonVehicle.concat($event);
    this.jsonNewVehicle(this.jsonGas, this.jsonBrandVehicle, this.jsonModelVehicle, this.jsonEngineVehicle, $event);

  }

  //Click Menu
  menuVehicle(){
    this.menuVe = true;
    this.menuGa = false;
    this.menuBr = false;
    this.menuMo = false;
    this.menuEn = false;
  }

  menuGas(){
    this.menuVe = false;
    this.menuGa = true;
    this.menuBr = false;
    this.menuMo = false;
    this.menuEn = false;
  }

  menuBrand(){
    this.menuVe = false;
    this.menuGa = false;
    this.menuBr = true;
    this.menuMo = false;
    this.menuEn = false;
  }

  menuModel(){
    this.menuVe = false;
    this.menuGa = false;
    this.menuBr = false;
    this.menuMo = true;
    this.menuEn = false;
  }

  menuEngine(){
    this.menuVe = false;
    this.menuGa = false;
    this.menuBr = false;
    this.menuMo = false;
    this.menuEn = true;
  }

}
