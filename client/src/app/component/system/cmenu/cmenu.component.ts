import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmenu',
  templateUrl: './cmenu.component.html',
  styleUrls: ['./cmenu.component.css']
})
export class CmenuComponent implements OnInit {

  confiMenu = [
    { nombre: "Establecimientos", href:"establecimiento" }
  ]

  confSales = [
    { nombre: "Ventas", href:"ventas" }
  ]

  confBOx = [
    { nombre: "Caja", href:"caja" }
  ]

  conlogistics = [
    { nombre: "Logistica", href:"logistica" }
  ]


  type = "Administrador"

  constructor() { }

  ngOnInit() {
  }

}
