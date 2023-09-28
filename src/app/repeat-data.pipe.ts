import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'repeatData'
})
export class RepeatDataPipe implements PipeTransform {

  transform(value: string, n: number): string {
    return value.repeat(n);
  }

}
