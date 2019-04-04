import { Injectable } from '@angular/core';
import { BrandsProducts } from 'src/app/models/brandsProduct';

@Injectable({
  providedIn: 'root'
})
export class BrandsService {

  jsonBrandsProduct : BrandsProducts[] = [
    {
      idBrand: 1,
      nameBrand: "Toyonisa",
      descriptionBrand: "-",
      codeBrand: "T",
      stateBrand: 1,
    },
    {
      idBrand: 2,
      nameBrand: "Fm",
      descriptionBrand: "-",
      codeBrand: "F",
      stateBrand: 1,
    },
    {
      idBrand: 3,
      nameBrand: "Original",
      descriptionBrand: "-",
      codeBrand: "G",
      stateBrand: 1,
    },
    {
      idBrand: 4,
      nameBrand: "Toto",
      descriptionBrand: "-",
      codeBrand: "TO",
      stateBrand: 2,
    },
    {
      idBrand: 5,
      nameBrand: "-",
      descriptionBrand: "-",
      codeBrand: "T",
      stateBrand: 1,
    }
  ]

  constructor() { }
}
