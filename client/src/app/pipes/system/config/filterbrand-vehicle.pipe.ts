import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterbrandVehicle'
})
export class FilterbrandVehiclePipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if(arg === "" || arg.length < 1) return value
    const resultList = [];
    for(const brandVehicle of value){
      if(brandVehicle.nameBrandV.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultList.push(brandVehicle);
      }
    }
    return resultList;
  }
}
