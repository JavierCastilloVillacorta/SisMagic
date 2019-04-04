import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtersuperProduct'
})
export class FiltersuperProductPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if(arg === "" || arg.length < 1) return value
    const resultList = [];
    for(const superProduct of value){
      if(superProduct.nameSuper.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultList.push(superProduct);
      }
    }
    return resultList;
  }

}
