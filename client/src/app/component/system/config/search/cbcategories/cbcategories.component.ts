import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-cbcategories',
  templateUrl: './cbcategories.component.html',
  styleUrls: ['./cbcategories.component.css']
})
export class CbcategoriesComponent implements OnInit {

  @Output() searchCatText = new EventEmitter<string>();
  @Output() newFormCategory = new EventEmitter<any>();

  
  filterLisCat = "";
  newCategory: Category[] = [];

  constructor() { }

  ngOnInit() {
  }

  search(){
    this.searchCatText.emit(this.filterLisCat);
  }

  newStore(){
    this.newCategory = [];
    this.newFormCategory.emit(this.newCategory);
  }

}
