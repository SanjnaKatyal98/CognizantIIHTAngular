import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformData'
})
export class TransformDataPipe implements PipeTransform {

  transform(value: string, var1: string): string {
    const str=value.split(' ');
    console.log(str);
    const str1=str.join('**');
    return str1;
  }
}