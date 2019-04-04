import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterVehicle'
})
export class FilterVehiclePipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if(arg === "" || arg.length < 1) return value
    const resultList = [];
    for(const vehicle of value){
      let datosConcat = vehicle.nameBrandV +" "+ vehicle.nameModel;
      if(datosConcat.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultList.push(vehicle);
      }
    }
    return resultList;
  }

}
