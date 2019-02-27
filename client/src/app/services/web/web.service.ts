import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../../models/usuario'
//import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebService {
  
  API_URI = 'http://localhost:3000/confi'

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get(`${this.API_URI}/usuario`);
  }

  getUser(id: string){
    return this.http.get(`${this.API_URI}/usuario/${id}`);
  }

  saveUser(user : User){
    return this.http.post(`${this.API_URI}/usuario`, user)
  }
  /*
  updateUser(id: string, updatedUser: User): Observable<any>{
    return this.http.put(`${this.API_URI}/usuario${id}`,updatedUser);
  }
*/

}
