import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterpositionProduct'
})
export class FilterpositionProductPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if(arg === "" || arg.length < 1) return value
    const resultList = [];
    for(const positionProduct of value){
      if(positionProduct.namePosition.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultList.push(positionProduct);
      }
    }
    return resultList;
  }

}
