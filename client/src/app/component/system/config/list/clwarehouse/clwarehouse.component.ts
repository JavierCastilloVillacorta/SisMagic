import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Store } from 'src/app/models/store';

@Component({
  selector: 'app-clwarehouse',
  templateUrl: './clwarehouse.component.html',
  styleUrls: ['./clwarehouse.component.css']
})
export class ClwarehouseComponent implements OnInit {

  @Input() filterWareH;
  @Input() warehouseTotal;
  @Output() clickOupWareHouse = new EventEmitter<any>();
  

  constructor() { }

  ngOnInit() {
  }

  clickSecundaryWare(warehouse:Store){    
    this.clickOupWareHouse.emit(warehouse);
  }

}
