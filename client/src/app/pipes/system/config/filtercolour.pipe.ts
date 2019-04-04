import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtercolour'
})
export class FiltercolourPipe implements PipeTransform {
  transform(value: any, args: any): any {
    var textserch = args.search;
    if(args.search === "" || args.length < 1)return value;
        value = String(value);
        let startIndex = value.toLowerCase().indexOf(textserch.toLowerCase());
        if (startIndex != -1) {
            let endLength = textserch.length;
            let matchingString = value.substr(startIndex, endLength);
            return value.replace(matchingString, "<mark class='highlightedText'>" + matchingString + "</mark>");
        }else{
          return value
        }
  }
}
