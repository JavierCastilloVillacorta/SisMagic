import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Category } from 'src/app/models/category';


@Component({
  selector: 'app-clcategories',
  templateUrl: './clcategories.component.html',
  styleUrls: ['./clcategories.component.css']
})
export class ClcategoriesComponent implements OnInit {


  @Input() jsonCategory;
  @Input() filterCat;
  @Output() clickOupListCat = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  clicListCat(category:Category){
    this.clickOupListCat.emit(category);
  }


}
