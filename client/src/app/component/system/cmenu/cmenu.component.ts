import { Component, OnInit } from '@angular/core';
import * as  $ from 'jquery';
import { TypeUser } from "./../../../models/typeUser";
import { User } from "./../../../models/user";
import { SmenuService } from 'src/app/services/system/config/menu/smenu.service';


@Component({
  selector: 'app-cmenu',
  templateUrl: './cmenu.component.html',
  styleUrls: ['./cmenu.component.css']
})
export class CmenuComponent implements OnInit {

  types: TypeUser[] = [];
  user: User[] = [];


  admin = [
    {name: "Establecimiento", routerL: "establishment"},
    {name: "Vehiculos", routerL: "Vehicles"},
    {name: "Productos", routerL: "products"},    
    {name: "Cuentas y Caja", routerL: "bills"},
    {name: "Usuarios", routerL: "user"},
    {name: "Clientes", routerL: "customers"},
    {name: "Proveedores", routerL: "provider"},
    {name: "Talleres", routerL: "workshops"}
  ];
 
  warehouse = [
    {name : "Almacenes 1", routerL: "almacen1"}, 
    {name : "Almacenes 2", routerL: "almacen1"}, 
    {name : "Almacenes 3", routerL: "almacen1"}, 
    {name : "Almacenes 4", routerL: "almacen1"}
  ];


  seller = [
    {name : "ventas 1", routerL: "ventas1"},
    {name : "ventas 2", routerL: "ventas1"},
    {name : "ventas 3", routerL: "ventas1"},
    {name : "ventas 4", routerL: "ventas1"}
  ];


  box = [
    {name: "Caja 1", routerL: "caja1"},
    {name: "Caja 2", routerL: "caja1"},
    {name: "Caja 3", routerL: "caja1"}
  ];

  Logistics = [
    {name : "logisitca 1", routerL: "logisitca1"},
    {name : "logisitca 2", routerL: "logisitca1"},
    {name : "logisitca 3", routerL: "logisitca1"}
  ];

  typeName = "";
  tituloMenu ="";
  icon = "";
  datosMenu = [];

  constructor(private smenuService:SmenuService) {}

  ngOnInit() {

    // INICIO - jquery 
    $(document).ready(function(){
      $(".sidebar-dropdown > a").click(function() {
        $(".sidebar-submenu").slideUp(200);
        if (
          $(this)
            .parent()
            .hasClass("active")
        ) {
          $(".sidebar-dropdown").removeClass("active");
          $(this)
            .parent()
            .removeClass("active");
        } else {
          $(".sidebar-dropdown").removeClass("active");
          $(this)
            .next(".sidebar-submenu")
            .slideDown(200);
          $(this)
            .parent()
            .addClass("active");
        }
      });
      
      $("#close-sidebar").click(function() {
        $(".page-wrapper").removeClass("toggled");
        $("#cont-generalsist").removeClass('cont-general')
      });
      $("#show-sidebar").click(function() {
        $(".page-wrapper").addClass("toggled");
        $("#cont-generalsist").addClass('cont-general')
      });
      //$('.dropdown-toggle').dropdown();
    });
    // FIN - jquery 

    // Inicializando arreglo de Usuarios  - Tipos de Usuario
    this.types = this.smenuService.types;
    this.user = this.smenuService.user;
  
    this.getnewMenu(this.types[0]);         
  } 

  // Funcion new Menu

  getnewMenu(type:TypeUser){
    switch (type.idPrivilege) {
      case 1: // Administrador
        this.typeName = type.namePrivilee;
        this.tituloMenu = "Configuración";
        this.icon = "settings";
        this.datosMenu = this.admin;
        break;

      case 2: // Almacen
        this.typeName = type.namePrivilee;
        this.tituloMenu = "Almacen";
        this.icon = "attach_money";
        this.datosMenu = this.warehouse;
        break

      case 3: //Ventas
        this.typeName = type.namePrivilee;
        this.tituloMenu = "Ventas";
        this.icon = "local_atm";
        this.datosMenu = this.seller;
        break

      case 4: // Caja
        this.typeName = type.namePrivilee;
        this.tituloMenu = "Caja";
        this.icon = "view_comfy";
        this.datosMenu = this.box;
        break

      case 5: //Logistica
      this.typeName = type.namePrivilee;
      this.tituloMenu = "Logisticas";
      this.icon = "view_comfy";
      this.datosMenu = this.Logistics;
        break
    
      default:
        break;
    }
  }

}
