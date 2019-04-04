import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Equivalences } from 'src/app/models/equivalences';

@Component({
  selector: 'app-clequivalences',
  templateUrl: './clequivalences.component.html',
  styleUrls: ['./clequivalences.component.css']
})
export class ClequivalencesComponent implements OnInit {

  @Input() jsonEquivalences;
  @Input() filterEquivalencestext;
  @Output() clickOupListEquivalences = new EventEmitter<any>();


  constructor() { }

  ngOnInit() {
  }

  clicListEquivalence(equivalences:Equivalences){
    this.clickOupListEquivalences.emit(equivalences);
  }

}
