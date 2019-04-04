import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Store } from 'src/app/models/store';

@Component({
  selector: 'app-cbestableciminetos',
  templateUrl: './cbestableciminetos.component.html',
  styleUrls: ['./cbestableciminetos.component.css']
})
export class CbestableciminetosComponent implements OnInit {
  

  @Output() searchText = new EventEmitter<string>();
  @Output() newForm = new EventEmitter<any>();

  filterName = "";
  new: Store[] = [];

  constructor() { }

  ngOnInit() {
  }


  search(){
    this.searchText.emit(this.filterName);
  }

  newStore(){
    this.new = [];
    this.newForm.emit(this.new);
  }


}
