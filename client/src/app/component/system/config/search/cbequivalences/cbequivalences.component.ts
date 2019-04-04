import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { Equivalences } from 'src/app/models/equivalences';

@Component({
  selector: 'app-cbequivalences',
  templateUrl: './cbequivalences.component.html',
  styleUrls: ['./cbequivalences.component.css']
})
export class CbequivalencesComponent implements OnInit {

  @Output() searchEquivalenceText = new EventEmitter<string>();
  @Output() newFormEquivalence = new EventEmitter<any>();


  filterLisEquivalence = "";
  newEquivalence: Equivalences[] = [];

  constructor() { }

  ngOnInit() {
  }

  search(){
    this.searchEquivalenceText.emit(this.filterLisEquivalence);
  }

  newEquivalenc(){
    this.newEquivalence = [];
    this.newFormEquivalence.emit(this.newEquivalence)
  }

}
