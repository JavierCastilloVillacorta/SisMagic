import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  jsonProduct: Product[] = [
    {
      idProduct: 1,
      newCodeProduct: "0410.550.2tw",
      codBarProduct: "04.001",
      descriptionProduct: "CAM-44 Redonda / CAR-35",
      measureProduct: "93*2.5*2*4",
      stateProduct: 1,
      idCategory: 1,
      idBrand: 2,
      idUnity: 1,
      idTypeProduct: 2,
      idBrandV: 1,
      idPosition: 2,
      idSuper: 1,
      priceProduct: 20,
      alternatingProduct: "WLYPPPP WLT",
      referenceA: "12v",
      referenceB: "Refe A",
      referenceC: "Refe B",
      referenciaTypeProduct: "Tipo P"
    },
    {
      idProduct: 2,
      newCodeProduct: "0403.510.4lw",
      codBarProduct: "04.002",
      descriptionProduct: "CAM-55.8",
      measureProduct: "10*2.4*1*7",
      stateProduct: 2,
      idCategory: 2,
      idBrand: 1,
      idUnity: 3,
      idTypeProduct: 1,
      idBrandV: 2,
      idPosition: 1,
      idSuper: 2,
      priceProduct: 30,
      alternatingProduct: "410802DA 4D33",
      referenceA: "10v",
      referenceB: "Refe A",
      referenceC: "Refe B",
      referenciaTypeProduct: "Tipo P"
    },
    {
      idProduct: 3,
      newCodeProduct: "1403.500.4lw",
      codBarProduct: "14.001",
      descriptionProduct: "CAM-44 Redonda / CAR-37",
      measureProduct: "03*1.5*2",
      stateProduct: 1,
      idCategory: 2,
      idBrand: 2,
      idUnity: 3,
      idTypeProduct: 2,
      idBrandV: 2,
      idPosition: 2,
      idSuper: 2,
      priceProduct: 26,
      alternatingProduct: "409305DA",
      referenceA: "10L",
      referenceB: "Refe A",
      referenceC: "Refe B",
      referenciaTypeProduct: "Tipo P"
    },
    {
      idProduct: 4,
      newCodeProduct: "0413.500.4mw",
      codBarProduct: "04.003",
      descriptionProduct: "CAM-44 / CAR-35",
      measureProduct: "10*2.5*1*4",
      stateProduct: 1,
      idCategory: 3,
      idBrand: 1,
      idUnity: 2,
      idTypeProduct: 2,
      idBrandV: 2,
      idPosition: 3,
      idSuper: 3,
      priceProduct: 45,
      alternatingProduct: "89446088 4JB1",
      referenceA: "12v",
      referenceB: "Refe A",
      referenceC: "Refe B",
      referenciaTypeProduct: "Tipo P"
    }
  ]

  constructor() { }
}
