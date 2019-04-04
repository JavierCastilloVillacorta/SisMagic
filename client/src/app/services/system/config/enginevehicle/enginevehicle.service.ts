import { Injectable } from '@angular/core';
import { EngineVehicle } from 'src/app/models/engineVehicle';

@Injectable({
  providedIn: 'root'
})
export class EnginevehicleService {

  jsonEngineVehicle: EngineVehicle[] = [
    {
      idEngine: 1,
      nameEngine: "D4FACRDI",
      valveEngine: "Motor D4FACRDI"
    },
    {
      idEngine: 2,
      nameEngine: "DJY",
      valveEngine: "Motor DJY"
    },
    {
      idEngine: 3,
      nameEngine: "D4HA",
      valveEngine: "Motor D4HA"
    },
    {
      idEngine: 4,
      nameEngine: "D4HB",
      valveEngine: "Motor D4HB"
    },
    {
      idEngine: 5,
      nameEngine: "D4BX",
      valveEngine: "Motor D4BX"
    },
    {
      idEngine: 6,
      nameEngine: "D4AK",
      valveEngine: "Motor D4AK"
    },
    {
      idEngine: 7,
      nameEngine: "D4AF",
      valveEngine: "motor D4AF"
    }
  ]

  constructor() { }
}
