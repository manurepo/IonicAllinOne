import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the CapritalizePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'Capitalize',
})
export class CapitalizePipe implements PipeTransform {
  transform(value: string, args: string[]): any {
    if (!value) return value;

    return value.replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }
}
