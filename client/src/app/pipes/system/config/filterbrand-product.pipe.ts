import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterbrandProduct'
})
export class FilterbrandProductPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if(arg === "" || arg.length < 1) return value
    const resultList = [];
    for(const brandProduct of value){
      if(brandProduct.nameBrand.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultList.push(brandProduct);
      }
    }
    return resultList;
  }

}
