import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterwarehouse'
})
export class FilterwarehousePipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if(arg === "" || arg.length < 1) return value
    const resultList = [];
    for(const wareHouse of value){
      if(wareHouse.nameStore.toLowerCase().indexOf(arg.toLowerCase()) > -1 ){
        resultList.push(wareHouse);
      }
    }
    return resultList;
  }
}
