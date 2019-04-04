import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Store } from 'src/app/models/store';

@Component({
  selector: 'app-cbwarehouse',
  templateUrl: './cbwarehouse.component.html',
  styleUrls: ['./cbwarehouse.component.css']
})
export class CbwarehouseComponent implements OnInit {

  @Output()searchWareHouse = new EventEmitter<string>();
  @Output()newWareHouseForm  = new EventEmitter<any>();
    
  filterWareHouse = "";
  newWareHouse : Store[] =[];

  constructor() { }

  ngOnInit() {
  }

  search(){
    this.searchWareHouse.emit(this.filterWareHouse);
  }

  newWare(){
    this.newWareHouse = [];
    this. newWareHouseForm.emit(this.newWareHouse);
  }

}
