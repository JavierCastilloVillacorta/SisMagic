import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Equivalences } from 'src/app/models/equivalences';

@Component({
  selector: 'app-cfequivalences',
  templateUrl: './cfequivalences.component.html',
  styleUrls: ['./cfequivalences.component.css']
})
export class CfequivalencesComponent implements OnInit {

  @Input() datosEquivalences;
  @Output() saveEquivalences = new EventEmitter<any>();

  equivalence : Equivalences[];

  validForm = true;
  valCodEquivalence = true;
  valCodFrabricEquivalence = true;



  constructor() { }

  ngOnInit() {
    this.resetinput();
  }

  resetinput(){
    this.datosEquivalences = [];
    this.datosEquivalences.stateEquivalence = 1;
    this.datosEquivalences.btnName = "Guardar";
  }


  onSaveEquivalences(){
    
    this.validForm = this.valForm();

    if(this.validForm){

      if(this.datosEquivalences.btnName == "Guardar"){

        this.datosEquivalences.idEquivalence = 1; 

        this.equivalence = [{
          idEquivalence: this.datosEquivalences.idEquivalence,
          codEquivalence : this.datosEquivalences.codEquivalence,
          codFrabricEquivalence : this.datosEquivalences.codFrabricEquivalence,
          descriptionEquivalence : this.datosEquivalences.descriptionEquivalence,
          stateEquivalence: this.datosEquivalences.stateEquivalence
        }];

        this.saveEquivalences.emit(this.equivalence);
        this.resetinput();

      }else{
        alert("Modificar Equivalencia")
      }

    }

    
  }

  valForm(){
    if(this.datosEquivalences.codEquivalence == undefined || this.datosEquivalences.codEquivalence == ""){
      this.valCodEquivalence = false;
    }else{
      this.valCodEquivalence = true;
    }


    if(this.datosEquivalences.codFrabricEquivalence == undefined || this.datosEquivalences.codFrabricEquivalence == ""){
      this.valCodFrabricEquivalence = false;
    }else{
      this.valCodFrabricEquivalence = true;
    }

    if(this.valCodEquivalence == true && this.valCodFrabricEquivalence == true){
      return true;
    }else{
      return false;
    }

  }

}
