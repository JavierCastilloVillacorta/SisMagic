import { Injectable } from '@angular/core';
import { Store } from './../../../../models/store';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SestablishmentsService {

  API_URI = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  
  // Sucursal Matris select *
  getEstablecerMatrixs(){
    return this.http.get(`${this.API_URI}/confi/estable`);
  }
  // Sucursal Sucursal select *
  getEstablecerSucursal(){
    return this.http.get(`${this.API_URI}/confi/sucur`);
  }
  



  getEstablecerMatrix(id:string){
    return this.http.get(`${this.API_URI}/confi/estable/${id}`)
  }

  updateEstablecerMatrix(id, updateEstablecer){
    return this.http.put(`${this.API_URI}/confi/estable/${id}`, updateEstablecer)
  }

  saveEstablecerMatrix(store: Store){
    return this.http.post(`${this.API_URI}/confi/estable/`, store)
  }




  postFile(caption: string, fileToUpload: File){
    console.log(caption);
    console.log(fileToUpload);
    
    const endpoint = "SisMagic/server/img/establecer/";
    const formData: FormData = new FormData();
    formData.append('Image',fileToUpload, fileToUpload.name);
    formData.append('ImageCaption', caption);
    console.log(this.http.post(endpoint, formData));
    
    return this.http
      .post(endpoint, formData);
  }
  


}
