import { Injectable } from '@angular/core';
import { Category } from 'src/app/models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  jsonCategory : Category[] =[
    {
      idCategory: 1,
      nameCategory: "Motor Armado",
      descriptionCategory: "Descripcion Motor Armado",
      codeCategory: "1",
      stateCategory: 1,
    },
    {
      idCategory: 2,
      nameCategory: "Pistones",
      descriptionCategory: "Descripcion Pistones",
      codeCategory: "9",
      stateCategory: 1,
    },
    {
      idCategory: 3,
      nameCategory: "Pistones Diesel",
      descriptionCategory: "Descripcion Pistones Diesel",
      codeCategory: "10",
      stateCategory: 1,
    },
    {
      idCategory: 4,
      nameCategory: "Motor Completo",
      descriptionCategory: "Descripcion Motor Completo",
      codeCategory: "4",
      stateCategory: 2,
    }
  ]

  constructor() { }
}
