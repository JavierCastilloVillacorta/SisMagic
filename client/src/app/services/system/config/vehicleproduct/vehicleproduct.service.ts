import { Injectable } from '@angular/core';
import { VehicleProduct } from 'src/app/models/vehicleProduct';

@Injectable({
  providedIn: 'root'
})
export class VehicleproductService {

  jsonVehicleProduct : VehicleProduct[] = [
    {
      idProduct: 1,
      idVehicle: 1,
    },
    {
      idProduct: 1,
      idVehicle: 2,
    },
    {
      idProduct: 1,
      idVehicle: 3,
    },
    {
      idProduct: 2,
      idVehicle: 1,
    }
  ]

  constructor() { }
}
