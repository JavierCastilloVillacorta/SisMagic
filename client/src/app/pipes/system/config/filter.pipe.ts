import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if(arg === "" || arg.length < 1) return value
    const resultList = [];
    for(const establecer of value){
      if(establecer.nameStore.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultList.push(establecer);
      }
    }
    return resultList;
  }
}
