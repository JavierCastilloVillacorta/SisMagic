import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Store } from 'src/app/models/store';


@Component({
  selector: 'app-clestableciminetos',
  templateUrl: './clestableciminetos.component.html',
  styleUrls: ['./clestableciminetos.component.css']
})
export class ClestableciminetosComponent implements OnInit {


 @Input() filterName;
 @Output() clickOupPrimary = new EventEmitter<any>();
 @Output() clickOupSecondaty = new EventEmitter<any>();
 @Input() storeTotal;


  constructor() {}

  ngOnInit() {
  }


  clickPrimary(primary:Store){
    this.clickOupPrimary.emit(primary);   
  }

  clickSecundary(secundary:Store){    
    this.clickOupSecondaty.emit(secundary);
  }
}


