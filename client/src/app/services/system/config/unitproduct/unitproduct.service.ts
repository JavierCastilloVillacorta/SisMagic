import { Injectable } from '@angular/core';
import { UnitProduct } from 'src/app/models/unitProduct';

@Injectable({
  providedIn: 'root'
})
export class UnitproductService {

  jsonUnitProduct: UnitProduct[] = [
    {
      idUnity: 1,
      nameUnity: "Pack-1",
      codeUnity: "P-1",
      descriptionUnity: "Pack 1 Unidades",
      quantityUnity: 1
    },
    {
      idUnity: 2,
      nameUnity: "Pack-2",
      codeUnity: "P-2",
      descriptionUnity: "Pack 2 Unidades",
      quantityUnity: 2
    },
    {
      idUnity: 3,
      nameUnity: "Pack-3",
      codeUnity: "P-3",
      descriptionUnity: "Pack 3 Unidades",
      quantityUnity: 3
    },
    {
      idUnity: 4,
      nameUnity: "Pack-4",
      codeUnity: "P-4",
      descriptionUnity: "Pack 4 Unidades",
      quantityUnity: 4
    }
  ]

  constructor() { }
}
