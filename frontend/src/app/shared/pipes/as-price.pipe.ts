import { Pipe, PipeTransform } from '@angular/core';
import { isNumber } from 'lodash'

@Pipe({name: 'asPrice', pure: false})
export class AsPricePipe implements PipeTransform {
  constructor() {}

  transform(value: any, args?: any): any {
    if (isNumber(value)) {
      return "<sup>$</sup>" + value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    } else {
      return "<i>none</i>"
    }
  }
}