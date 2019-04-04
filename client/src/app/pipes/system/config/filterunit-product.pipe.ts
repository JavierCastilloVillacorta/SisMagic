import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterunitProduct'
})
export class FilterunitProductPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if(arg === "" || arg.length < 1) return value
    const resultList = [];
    for(const unitProduct of value){
      if(unitProduct.nameUnity.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultList.push(unitProduct);
      }
    }
    return resultList;
  }

}
