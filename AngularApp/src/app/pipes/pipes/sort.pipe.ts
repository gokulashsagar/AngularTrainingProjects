import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortString' 
})
export class SortPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value;
  }

}
