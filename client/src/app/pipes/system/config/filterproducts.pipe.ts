import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterproducts'
})
export class FilterproductsPipe implements PipeTransform {


  transform(value: any, arg: any): any {    
    if(arg.search === "" || arg.length < 1) return value
    const resultList = [];
    for(const product of value){      
      let datosConcat = product.newCodeProduct +" "+ product.codBarProduct + " " + product.alternatingProduct +" "+product.nameBrand+" "+product.nameCategory;      
      if(datosConcat.toLowerCase().indexOf(arg.search.toLowerCase()) > -1){
        resultList.push(product)
      }
    }
    return resultList;
  }
}
