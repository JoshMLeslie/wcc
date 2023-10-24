import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelNormal'
})
export class CamelToNormPipe implements PipeTransform {

  transform(value: string): string {
    return value.replace(/_/g, " ");
  }

}
