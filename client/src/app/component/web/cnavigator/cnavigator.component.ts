import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cnavigator',
  templateUrl: './cnavigator.component.html',
  styleUrls: ['./cnavigator.component.css']
})
export class CnavigatorComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  producto(){
    this.router.navigate(['/productos']);
  }

}
