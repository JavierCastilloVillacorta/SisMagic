import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtercategories'
})
export class FiltercategoriesPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if(arg === "" || arg.length < 1) return value
    const resultList = [];
    for(const category of value){
      if(category.nameCategory.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultList.push(category);
      }
    }
    return resultList;
  }

}


