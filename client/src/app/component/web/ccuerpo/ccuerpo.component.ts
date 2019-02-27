import { Component, OnInit } from '@angular/core';
import { WebService } from '../../../services/web/web.service';

@Component({
  selector: 'app-ccuerpo',
  templateUrl: './ccuerpo.component.html',
  styleUrls: ['./ccuerpo.component.css']
})
export class CcuerpoComponent implements OnInit {

  users: any = [];

  constructor( private webService: WebService) { }

  ngOnInit() {
    this.webService.getUsers().subscribe(
      res => {
        this.users = res;
      },
      err => console.error(err)      
      
    )


  }


}
