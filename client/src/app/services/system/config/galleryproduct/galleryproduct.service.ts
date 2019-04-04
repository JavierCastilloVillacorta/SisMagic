import { Injectable } from '@angular/core';
import { GalleryProduct } from 'src/app/models/galleryProduct';

@Injectable({
  providedIn: 'root'
})
export class GalleryproductService {

  jsonGalleryProduct : GalleryProduct[]=[
    {
      idGallery: 1,
      urlGallery: "../assets/img/logo.png",
      idProduct: 1
      
    },
    {
      idGallery: 2,
      urlGallery: "../assets/img/imgp1.jpg",
      idProduct: 1
      
    },
    {
      idGallery: 2,
      urlGallery: "../assets/img/logo.png",
      idProduct: 1
      
    },
    {
      idGallery: 2,
      urlGallery: "../assets/img/imgp1.jpg",
      idProduct: 1
      
    },
    {
      idGallery: 3,
      urlGallery: "../assets/img/logo.png",
      idProduct: 2
      
    },
    {
      idGallery: 4,
      urlGallery: "../assets/img/imgp1.jpg",
      idProduct: 3
      
    }
  ]

  constructor() { }
}
