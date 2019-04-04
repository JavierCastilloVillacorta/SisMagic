import { Injectable } from '@angular/core';
import { PositionProduct } from 'src/app/models/positionproduct';

@Injectable({
  providedIn: 'root'
})
export class PositionproductService {

  jsonPositionProduct : PositionProduct[] =[
    {
      idPosition: 1,
      descriptionPosition: "Estante 2 nivel 3",
      namePosition: "201"
    },
    {
      idPosition: 2,
      descriptionPosition: "Estante 1 nivel 2",
      namePosition: "202"
    },
    {
      idPosition: 3,
      descriptionPosition: "Estante 2 nivel 1",
      namePosition: "203"
    },
    {
      idPosition: 4,
      descriptionPosition: "Estante 1 nivel 4",
      namePosition: "204"
    }
  ]

  constructor() { }
}
