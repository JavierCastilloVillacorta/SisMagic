import { Component, OnInit, HostListener, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cbproducts',
  templateUrl: './cbproducts.component.html',
  styleUrls: ['./cbproducts.component.css']
})
export class CbproductsComponent implements OnInit {

  @Output() searchProductText = new EventEmitter<any>();
  @ViewChild('searchid') searchid: ElementRef; 

  tipySearch = "CC"
  metaChar = false;
  exampleKey = 16;
  filterLisProductText = "";
  placesearch = "Nombre Codigo";

  constructor() { }

  ngOnInit() {
  }


typeSearchTecla(itm){

  switch (itm) {
    case "CC":
      this.tipySearch = "CC"
      this.placesearch = "Codigo Guardado";
      break
    case "CB":
      this.tipySearch = "CB"
      this.placesearch = "Codigo Barras";
      break;
    case "CA":
      this.tipySearch = "CA"
      this.placesearch = "Codigo Producto";
      break;
    case "CE":
      this.tipySearch = "CE"
      this.placesearch = "Codigo Equivalencia";
      break;
    case "CM":
      this.tipySearch = "CM"
      this.placesearch = "Codigo Familia";
      break;
    case "CD":
      this.tipySearch = "CD"
      this.placesearch = "Codigo Medida";
      break;
    case "CT":
      this.tipySearch = "CT"
      this.placesearch = "Codigo Motor Modelo";
      break;
  }
  //this.searchid.nativeElement.focus(); 
  this.filterLisProductText = "";
  
}

  newSearchCodyg(event){
    this.typeSearchTecla(event.target.value);
  }
  
  // buscador letras
  search(){
    this.searchProductText.emit({search:this.filterLisProductText, Type:this.tipySearch});
  }
  
  
  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {

    let key = event.keyCode || event.which;
    var keychar = String.fromCharCode(key);
  
    if (key == this.exampleKey) {
      this.metaChar = true;
    }
  
    if (key != this.exampleKey) {
      if (this.metaChar) {
        this.metaChar = false;
        this.typeSearchTecla("C"+keychar);
      }
    }   
  }


}
