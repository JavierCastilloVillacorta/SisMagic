import { Injectable } from '@angular/core';
import { ModelVehicle } from 'src/app/models/modelVehicle';

@Injectable({
  providedIn: 'root'
})
export class ModelvehicleService {

  jsonModelVehicle: ModelVehicle[] =[
    {
      idModel: 1,
      nameModel: "Getz",
      descriptionModel: "Descripcion Getz"
    },
    {
      idModel: 2,
      nameModel: "130",
      descriptionModel: "Descripcion 130"
    },
    {
      idModel: 3,
      nameModel: "Tuscon",
      descriptionModel: "Descripcion Tuscon"
    },
    {
      idModel: 4,
      nameModel: "Santa fe",
      descriptionModel: "Descripcion Santa fe"
    },
    {
      idModel: 5,
      nameModel: "Porterii",
      descriptionModel: "Descripcion Porterii"
    },
    {
      idModel: 6,
      nameModel: "Galloper",
      descriptionModel: "Descripcion Galloper"
    },
    {
      idModel: 7,
      nameModel: "H100",
      descriptionModel: "Descripcion H100"
    }
  ]

  constructor() { }
}
