import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Gas } from 'src/app/models/gas';

@Component({
  selector: 'app-cfgas',
  templateUrl: './cfgas.component.html',
  styleUrls: ['./cfgas.component.css']
})
export class CfgasComponent implements OnInit {

  @Input() datosGas;
  @Output() SaveGass = new EventEmitter<any>();
  gas : Gas[];

  validForm = true;
  valNameGas = true;

  constructor() { }

  ngOnInit() {
    this.resetInput();
  }

  resetInput(){
    this.datosGas = [];
    this.datosGas.btnName = "Guardar";
  }

  onSaveGass(){

    this.validForm = this.valdForm();
  
    if(this.validForm){
      if(this.datosGas.btnName == "Guardar"){
        this.datosGas.idGas = 5;

        this.gas =[{
          nameGas : this.datosGas.nameGas,
          descriptionGas : this.datosGas.descriptionGas,
        }];
        this.SaveGass.emit(this.gas);
        this.resetInput();
      }else{
        alert("Modificar")
      }

    }
  }


  valdForm(){

    if(this.datosGas.nameGas == undefined || this.datosGas.nameGas == ""){
      this.valNameGas = false;
    }else{
      this.valNameGas = true;
    }

    if(this.valNameGas == true){
      return true;
    }else{
      return false;
    }

  }

}
