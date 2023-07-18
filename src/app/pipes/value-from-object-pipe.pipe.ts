import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'valueFromObject'
})
export class ValueFromObjectPipe implements PipeTransform {
  transform(value: any): string {
    if (value && typeof value === 'object' && !Array.isArray(value)) {
      const values = Object.values(value);
      if (Array.isArray(values[0])) {
        return values[0].join(', ');
      }
      return String(values[0]);
    }
    return String(value);
  }
}
