import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'dataPropertyGetter',
    standalone: true // Agrega esta línea
})
export class DataPropertyGetterPipe implements PipeTransform {

  transform(object: any, keyName: string, ...args: unknown[]): unknown {
    return object[keyName];
  }

}