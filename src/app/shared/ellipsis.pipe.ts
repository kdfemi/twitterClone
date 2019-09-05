import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ellipsis'
})
export class EllipsisPipe implements PipeTransform {

  transform(value: string): string {
    if (value.length > 10) {
      return value.substr(0, 8) + '...';
    }
    return value;
  }


}
