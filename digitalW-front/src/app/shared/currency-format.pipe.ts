import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Pipe({
  name: 'currencyFormat'
})
export class CurrencyFormatPipe implements PipeTransform {

  currencyCode = 'R$';

  transform(value: any, args?: any): any {
    return (new CurrencyPipe('pt-BR')).transform(value, this.currencyCode);
  }
}
