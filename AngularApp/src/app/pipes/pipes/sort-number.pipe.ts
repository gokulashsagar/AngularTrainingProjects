import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortNumber'
})
export class SortNumberPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    
    console.log(value)
    console.log(args)
    if (args === 'asc') {
      return value.sort((a, b) => b - a);
    }
    if (args === 'dsc') {
      return value.sort((a, b) => a - b);
    }
    return value.sort((a, b) => b - a);
  }


}
