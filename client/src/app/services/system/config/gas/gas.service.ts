import { Injectable } from '@angular/core';
import { Gas } from 'src/app/models/gas';

@Injectable({
  providedIn: 'root'
})
export class GasService {

  jsonGas : Gas[] =[
    {
      idGas : 1,
      nameGas : "Gasolinero",
      descriptionGas : "Combustible 1"
    },
    {
      idGas : 2,
      nameGas : "Diesel",
      descriptionGas : "Combustible 2"
    },
    {
      idGas : 3,
      nameGas : "Híbrido",
      descriptionGas : "Combustible 3"
    },
    {
      idGas : 4,
      nameGas : "GLP",
      descriptionGas : "Combustible 3"
    }
  ];

  constructor() { }
}
