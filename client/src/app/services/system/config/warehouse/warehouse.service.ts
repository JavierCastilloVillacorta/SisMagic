import { Injectable } from '@angular/core';
import { Store } from 'src/app/models/store';

@Injectable({
  providedIn: 'root'
})
export class WarehouseService {
  
warehouse: Store[] =[
  { idStore: 8,
    nameStore: "Almacen 1 Principal 1", 
    rucStore: "44444444444", 
    addressStore : "Jr Ejemplo N° 123. ",
    mobileStore : "123456789",
    stateStore: 2,
    imageStore: "direccion.img",
    phoneStore: " 01 123456",
    idMatrix: 1,
    idType: 3
  },
  { idStore: 9,
    nameStore: "Almacen 2 Principal 1", 
    rucStore: "44444444444", 
    addressStore : "Jr Ejemplo N° 123. ",
    mobileStore : "123456789",
    stateStore: 1,
    imageStore: "direccion.img",
    phoneStore: " 01 123456",
    idMatrix: 1,
    idType: 3
  },
  { idStore: 10,
    nameStore: "Almacen 1 Principal 2", 
    rucStore: "44444444444", 
    addressStore : "Jr Ejemplo N° 123. ",
    mobileStore : "123456789",
    stateStore: 1,
    imageStore: "direccion.img",
    phoneStore: " 01 123456",
    idMatrix: 2,
    idType: 3
  },
  { idStore: 11,
    nameStore: "Almacen 2 Principal 2", 
    rucStore: "44444444444", 
    addressStore : "Jr Ejemplo N° 123. ",
    mobileStore : "123456789",
    stateStore: 1,
    imageStore: "direccion.img",
    phoneStore: " 01 123456",
    idMatrix: 2,
    idType: 3
  },
  { idStore: 12,
    nameStore: "Almacen 3 Principal 2", 
    rucStore: "44444444444", 
    addressStore : "Jr Ejemplo N° 123. ",
    mobileStore : "123456789",
    stateStore: 1,
    imageStore: "direccion.img",
    phoneStore: " 01 123456",
    idMatrix: 2,
    idType: 3
  }
  
];

  constructor() { }

  establecerWareHouse(storeSave){
    this.warehouse = this.warehouse.concat(storeSave);
  }

}
