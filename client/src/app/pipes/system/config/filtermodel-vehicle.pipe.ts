import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtermodelVehicle'
})
export class FiltermodelVehiclePipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if(arg === "" || arg.length < 1) return value
    const resultList = [];
    for(const modelVehicle of value){
      if(modelVehicle.nameModel.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultList.push(modelVehicle);
      }
    }
    return resultList;
  }

}
