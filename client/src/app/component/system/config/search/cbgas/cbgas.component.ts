import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Gas } from 'src/app/models/gas';

@Component({
  selector: 'app-cbgas',
  templateUrl: './cbgas.component.html',
  styleUrls: ['./cbgas.component.css']
})
export class CbgasComponent implements OnInit {

  @Output() searchGasText = new EventEmitter<string>();
  @Output() newFormGas = new EventEmitter<any>();

  filterLisGas = "";
  newGass : Gas[] = [];

  constructor() { }

  ngOnInit() {
  }

  search(){
    this.searchGasText.emit(this.filterLisGas);
  }

  newGas(){
    this.newGass = [];
    this.newFormGas.emit(this.newGass);
  }

}
