import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'current'
})
export class CurrentPipe implements PipeTransform {

  private prefijo: string;
  private separadorDecimal: string;
  private separadorMiles: string;
  private fraction: any;
  private value: any;

  constructor() {
    // TODO comes from configuration settings
    this.prefijo = '';
    this.separadorDecimal = ',';
    this.separadorMiles = '.';
  }

  // Tranformamos el valor al formato que deseamos 1'000'000'.12
  public transform(initialValue: string, fractionSize: number = 2): string {
    [this.value, this.fraction = ''] = (initialValue || '').toString().split(this.separadorMiles);
    const newValue = this.value.replace(/\B(?=(\d{3})+(?!\d))/g, this.separadorMiles);
    const newFraction = this.fraction > 0 ? this.fraction : '.';
    return this.prefijo + newValue + newFraction;
  }


  // Quitamos el formato al valor 1.000.000,12 -> 1000000.12
  public parse(value: string, fractionSize: number = 2): string {
    // tslint:disable-next-line: prefer-const
    let [valorNormal, fraction = ''] = (value || '').split(this.separadorDecimal);
    let nuevoValor;
    valorNormal = valorNormal.replace(/[.]/g, '');
    // tslint:disable-next-line: radix
    if (parseInt(fraction) > 0) {
      nuevoValor = `${valorNormal}${this.separadorMiles}${fraction}`;
    } else {
      nuevoValor = `${valorNormal}`;
    }
    return nuevoValor;
  }

  // Función para mostrar los montos con separadores de miles usando el punto; inicialmente para mensajerí
  public parseInvertido(value: string, fractionSize: number = 2): string {
    let [integer, fraction = ''] = (value || '').replace(this.prefijo, '')
      .split(this.separadorDecimal);

    integer = integer.replace(new RegExp(this.separadorDecimal, 'g'), '');

    fraction = parseInt(fraction, 10) > 0 && fractionSize > 0
      ? this.separadorMiles + ('')
      : '';
    return integer + fraction;
  }
}
