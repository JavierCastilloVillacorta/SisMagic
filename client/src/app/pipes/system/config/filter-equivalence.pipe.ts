import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterEquivalence'
})
export class FilterEquivalencePipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if(arg === "" || arg.length < 1) return value
    const resultList = [];
    for(const equivalences of value){
      if(equivalences.codFrabricEquivalence.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultList.push(equivalences);
      }
    }
    return resultList;
  }


}
