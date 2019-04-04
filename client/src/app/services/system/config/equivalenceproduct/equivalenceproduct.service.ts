import { Injectable } from '@angular/core';
import { EquivalenceProduct } from 'src/app/models/equivalenceProduct';

@Injectable({
  providedIn: 'root'
})
export class EquivalenceproductService {

  jsonEquivalenceProduct : EquivalenceProduct[] =[
    {
      idEquivalence: 1,
      idProduct: 1,
    },
    {
      idEquivalence: 2,
      idProduct: 1,
    },
    {
      idEquivalence: 3,
      idProduct: 1,
    },
    {
      idEquivalence: 2,
      idProduct: 2,
    }
  ]

  constructor() { }
}
