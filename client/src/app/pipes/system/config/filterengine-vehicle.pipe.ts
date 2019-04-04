import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterengineVehicle'
})
export class FilterengineVehiclePipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if(arg === "" || arg.length < 1) return value
    const resultList = [];
    for(const enginevehicle of value){
      if(enginevehicle.nameEngine.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultList.push(enginevehicle);
      }
    }
    return resultList;
  }

}
