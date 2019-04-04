import { Injectable } from '@angular/core';
import { BrandsVehicle } from 'src/app/models/brandsVehicle';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BrandvehicleService {

  jsonBrandVehicle : BrandsVehicle[] =[
    {
      idBrandV: 1,
      nameBrandV: "Toyota",
      imgBrandV: "img",
      descriptionBrandV: "Marca auto 01",
      letterBrandV: "TO",
      codeBrandV: "1"
    },
    {
      idBrandV: 2,
      nameBrandV: "Nissan",
      imgBrandV: "img",
      descriptionBrandV: "Marca auto 01",
      letterBrandV: "NI",
      codeBrandV: "2"
    },
    {
      idBrandV: 3,
      nameBrandV: "Original Toyota",
      imgBrandV: "img",
      descriptionBrandV: "Marca auto 01",
      letterBrandV: "TG",
      codeBrandV: "3"
    },
    {
      idBrandV: 4,
      nameBrandV: "Mazda",
      imgBrandV: "img",
      descriptionBrandV: "Marca auto 01",
      letterBrandV: "MA",
      codeBrandV: "4"
    },
    {
      idBrandV: 5,
      nameBrandV: "Mitsubishi",
      imgBrandV: "img",
      descriptionBrandV: "Marca auto 01",
      letterBrandV: "MI",
      codeBrandV: "5"
    }
];

  constructor(private http: HttpClient) { }


  postFile(caption: string, fileToUpload: File){
    const endpoint = "../../assets/img/";
    const formData: FormData = new FormData();
    formData.append('Image',fileToUpload, fileToUpload.name);
    formData.append('ImageCaption', caption);
    return this.http
      .post(endpoint, formData);
  }

}
