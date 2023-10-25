import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelNormal',
})
export class CamelToNormPipe implements PipeTransform {
  transform(value: string | null | undefined): string {
    if (!value) {
      return '';
    }
    return value.replace(/_/g, ' ');
  }
}
