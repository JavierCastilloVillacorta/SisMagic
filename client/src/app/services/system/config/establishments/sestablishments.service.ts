import { Injectable } from '@angular/core';
import { Store } from './../../../../models/store';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SestablishmentsService {

  establecerMatrix : Store[] = [
    { idStore: 1,
      nameStore: "El Mago Principal 1", 
      rucStore: "44444444444", 
      addressStore : "Jr Ejemplo N° 123. ",
      mobileStore : "123456789",
      stateStore: 1,
      imageStore: "direccion.img",
      phoneStore: " 01 123456",
      idMatrix: 0,
      idType: 1
    },
    { idStore: 2,
      nameStore: "El Mago Principal 2", 
      rucStore: "44444444444", 
      addressStore : "Jr Ejemplo N° 123. ",
      mobileStore : "123456789",
      stateStore: 1,
      imageStore: "../assets/img/logo.png",
      phoneStore: " 01 123456",
      idMatrix: 0,
      idType: 1
    }
    
  ];



  establecer: Store[] = [
    { idStore: 3,
      nameStore: "Sucursal 0 Tienda 1", 
      rucStore: "44444444444", 
      addressStore : "Jr Ejemplo N° 123. ",
      mobileStore : "123456789",
      stateStore: 2,
      imageStore: "direccion.img",
      phoneStore: " 01 123456",
      idMatrix: 1,
      idType: 2
    },
    { idStore: 4,
      nameStore: "Sucursal 1 Tienda 1", 
      rucStore: "44444444444", 
      addressStore : "Jr Ejemplo N° 123. ",
      mobileStore : "123456789",
      stateStore: 1,
      imageStore: "../assets/img/logo.png",
      phoneStore: " 01 123456",
      idMatrix: 1,
      idType: 2
    },

    { idStore: 5,
      nameStore: "Sucursal 2 Tienda 1", 
      rucStore: "44444444444", 
      addressStore : "Jr Ejemplo N° 123. ",
      mobileStore : "123456789",
      stateStore: 1,
      imageStore: "direccion.img",
      phoneStore: " 01 123456",
      idMatrix: 1,
      idType: 2
    },
    { idStore: 6,
      nameStore: "Sucursal 0 Tienda 2", 
      rucStore: "44444444444", 
      addressStore : "Jr Ejemplo N° 123. ",
      mobileStore : "123456789",
      stateStore: 1,
      imageStore: "direccion.img",
      phoneStore: " 01 123456",
      idMatrix: 2,
      idType: 2
    },
    { idStore: 7,
      nameStore: "Sucursal 1 Tienda 2", 
      rucStore: "44444444444", 
      addressStore : "Jr Ejemplo N° 123. ",
      mobileStore : "123456789",
      stateStore: 1,
      imageStore: "direccion.img",
      phoneStore: " 01 123456",
      idMatrix: 2,
      idType: 2
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


  establecerStore(storeSave){
      this.establecer = this.establecer.concat(storeSave);
  }
 

  establecerMatrixStore(storeSave){
      this.establecerMatrix = this.establecerMatrix.concat(storeSave);
  }

}
