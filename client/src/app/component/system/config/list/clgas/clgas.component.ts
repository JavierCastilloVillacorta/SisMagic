import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Gas } from 'src/app/models/gas';

@Component({
  selector: 'app-clgas',
  templateUrl: './clgas.component.html',
  styleUrls: ['./clgas.component.css']
})
export class ClgasComponent implements OnInit {

  @Input() jsonGas;
  @Output() clickOupListGas = new EventEmitter<any>();
  @Input() filertGas;
  
 

  constructor() { }

  ngOnInit() {
  }

  clickListGas(gas:Gas){
    this.clickOupListGas.emit(gas);
  }

}
