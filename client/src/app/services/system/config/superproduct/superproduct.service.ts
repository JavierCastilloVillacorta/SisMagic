import { Injectable } from '@angular/core';
import { SuperProduct } from 'src/app/models/superProduct';

@Injectable({
  providedIn: 'root'
})
export class SuperproductService {

  jsonSuperProduct : SuperProduct[] = [
    {
      idSuper: 1,
      nameSuper: "Std Alfin",
      descriptionSuper: "Esto es un STD 1",
      stateSuper: 1,
      codIntern: "ST"
    },
    {
      idSuper: 2,
      nameSuper: "Std",
      descriptionSuper: "Esto es un STD 2",
      stateSuper: 1,
      codIntern: "ST"
    },
    {
      idSuper: 3,
      nameSuper: "Std Alfin Galeria",
      descriptionSuper: "Esto es un STD 3",
      stateSuper: 2,
      codIntern: "STG"
    }

]


  constructor() { }
}
