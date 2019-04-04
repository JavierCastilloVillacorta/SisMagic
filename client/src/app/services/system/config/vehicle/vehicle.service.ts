import { Injectable } from '@angular/core';
import { Vehicles } from 'src/app/models/vehicles';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  jsonVehicle : Vehicles[] = [
    {
      idVehicle: 1,
      idModel: 1,
      idBrandV: 2,
      idGas: 1,
      idEngine: 1,
      diameterVehicle: "75.0",
      cylinderVehicle: "4",
      displacementVehicle: "1493",
      yearInit: 2008,
      yearEnd: 2010,
      stateVehicle: 1
    },
    {
      idVehicle: 2,
      idModel: 2,
      idBrandV: 3,
      idGas: 2,
      idEngine: 2,
      diameterVehicle: "83.0",
      cylinderVehicle: "4",
      displacementVehicle: "1685",
      yearInit: 2007,
      yearEnd: 2010,
      stateVehicle: 1
    },
    {
      idVehicle: 3,
      idModel: 3,
      idBrandV: 1,
      idGas: 1,
      idEngine: 1,
      diameterVehicle: "91.0",
      cylinderVehicle: "4",
      displacementVehicle: "2188",
      yearInit: 2005,
      yearEnd: 2007,
      stateVehicle: 1
    },
    {
      idVehicle: 4,
      idModel: 4,
      idBrandV: 3,
      idGas: 2,
      idEngine: 2,
      diameterVehicle: "100.0",
      cylinderVehicle: "4",
      displacementVehicle: "2475",
      yearInit: 2008,
      yearEnd: 2010,
      stateVehicle: 2
    }
  ]

  constructor() { }
}
