import { Component, OnInit } from '@angular/core';
import { SestablishmentsService } from 'src/app/services/system/config/establishments/sestablishments.service';
import { Store } from 'src/app/models/store';
import { WarehouseService } from 'src/app/services/system/config/warehouse/warehouse.service';

@Component({
  selector: 'app-cestablecimientos',
  templateUrl: './cestablecimientos.component.html',
  styleUrls: ['./cestablecimientos.component.css']
})
export class CestablecimientosComponent implements OnInit {

  establecer: any = [];
  establecerMatrix : any = [];
  warehouse : Store[]=[];
  
  filterName = ""; 
  filterWareH = "";
  datosStore : Store[] = [];
  datosWarehouse : Store[] = [];
  datos
  //nuevo array establecimientos
  storeTotal = [];
  //nuevo array alamcenes
  warehouseTotal = [];
  //variables menu
  itemEstablecer = true;
  itemWareHause = false;

  constructor(
    private sestablishmentsService:SestablishmentsService,
    private warehouseService: WarehouseService) {
  }

  ngOnInit() {
    // Establecimiento Matriz
    this.establecerMatr();
    //Establecimiento Sucursal
    this.establecerSucur();
    this.warehouse = this.warehouseService.warehouse;
    this.getListWareHouse(this.establecerMatrix, this.warehouse)
  }


  establecerMatr(){
    this.sestablishmentsService.getEstablecerMatrixs().subscribe(
      res =>{
        this.establecerMatrix = res;
      },
      err => console.log(err)
    );
  }

  establecerSucur(){
    this.sestablishmentsService.getEstablecerSucursal().subscribe(
      res =>{
        this.establecer = res;
        this.getListEstablecer(this.establecer, this.establecerMatrix);   
      },
      err => console.log(err)
    );
  }

  //Union Json establecimientos
  getListEstablecer(establecer,establecerMatrix){
    this.storeTotal = [];
    for ( var i=0; i < establecerMatrix.length; i++) {  
      let secundary=[];
      for ( let j=0; j < establecer.length; j++) { 
          if(establecerMatrix[i].idStore == establecer[j].idMatrix ){
            secundary.push(establecer[j]);
          }
      };
      this.storeTotal.push({primary: establecerMatrix[i], secundary : secundary});
    };
  }

  //Union Json Almacenes
  getListWareHouse(establecerMatrix,warehouse){
    this.warehouseTotal = [];
    for ( var i=0; i < establecerMatrix.length; i++) {  
      let wareh=[];
      for ( let j=0; j < warehouse.length; j++) { 
          if(establecerMatrix[i].idStore == warehouse[j].idMatrix ){
            wareh.push(warehouse[j]);
          }
      };
      this.warehouseTotal.push({primary: establecerMatrix[i], warehouse : wareh});
    };

  }


  // buscador Establecimientos
  onsearch($event){
    this.filterName = $event;
  }
  //Nuevo formulario Establecimietos
  onnewForm($event){
    $event.btnName = "Guardar";
    $event.idType = 1;
    $event.idMatrix = 0;
    $event.stateStore = 1;
    $event.imageStore = "../assets/img/img-default.jpg";
    this.datosStore = $event;
  }
  //Buscador de Almacenes
  searchWareHouse($event){
    this.filterWareH = $event;
  }
  //Nuevo formulario Almacenes
  newWareHouseForm($event){
    $event.btnName = "Guardar";
    $event.idType = 3;
    $event.idMatrix = 0;
    $event.stateStore = 1;
    this.datosWarehouse = $event;
  }

  // establecimientos Matriz
  neweStablecerMatrix($event){
    this.sestablishmentsService.saveEstablecerMatrix($event[0]).subscribe(
      res =>{
      alert(res["text"]);
      },
      err => console.log(err)
    );
    this.establecerMatr();
    this.establecerSucur();
  }

  // establecimientos sucursal
  newStore($event){
    //this.sestablishmentsService.establecerStore($event);
    //this.establecer = this.sestablishmentsService.establecer;
    // Arreglar al insertar base datos
    this.establecer = this.establecer.concat($event);
    this.getListEstablecer(this.establecer, this.establecerMatrix)
  }

  // establecimientos almacen
  newFormWareHouse($event){
    //this.warehouseService.establecerWareHouse($event);
    //this.warehouse = this.warehouseService.warehouse;
    //Arreglar al insertar base datos
    this.warehouse = this.warehouse.concat($event);
    this.getListWareHouse(this.establecerMatrix,this.warehouse)
    
  }

  //click listado sucursal principal
  clickOupPrimary($event){
    $event.btnName = "Modificar";
    this.datosStore = $event;
  }

  // click listado sucursal secundario
  clickOupSecondaty($event){
    $event.btnName = "Modificar";
    this.datosStore = $event;  
  }

  //clicklistado almacenenes
  clickOupWareHouse($event){
    $event.btnName = "Modificar";
    this.datosWarehouse = $event;
  }
 
  // Menu establecimientos
  menuEstablecer(){
    this.itemEstablecer = true;
    this.itemWareHause = false;
  }

  //Menu almacenes
  menuWareHause(){
    this.itemEstablecer = false;
    this.itemWareHause = true;
  }



}
