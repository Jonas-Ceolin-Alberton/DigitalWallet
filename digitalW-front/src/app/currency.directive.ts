import { Directive, HostListener, Input, OnInit, ElementRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Directive({
    selector: '[pdMaskCurrency]',
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: PdMaskCurrencyDirective,
        multi: true
    }]
})
export class PdMaskCurrencyDirective implements ControlValueAccessor, OnInit {

    onTouched: any;
    onChange: any;

    separadorDecimal: string;
    separadorMilhar: string;
    prefixo: string;
    private el: HTMLInputElement;

    @Input('pdMaskCurrency') pdMaskCurrency: any;

    constructor(private elementRef: ElementRef) {
        this.el = this.elementRef.nativeElement;
    }

    ngOnInit() {
        this.separadorDecimal = this.pdMaskCurrency.decimal || ',';
        this.separadorMilhar = this.pdMaskCurrency.milhar || '.';
        this.prefixo = this.pdMaskCurrency.prefixo || '';
    }

    writeValue(value: any): void {
        if (value) {
            let valor = value.toFixed(2);
            this.el.value = this.formataValor(String(valor));
        }
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    @HostListener('keyup', ['$event'])
    onKeyup($event: any) {
        $event.target.value = this.formataValor($event.target.value);
    }

    formataValor(value: string) {
        let valorNum = parseInt(value.replace(/\D/g, ''), 10);
        let valorMask = '';
        let valor: string;

        if (isNaN(valorNum)) {
            this.onChange('');
            return '';
        }

        valor = valorNum.toString();
        switch (valor.length) {
            case 1:
                valorMask = '0' + this.separadorDecimal +
                    '0' + valor;
                break;
            case 2:
                valorMask = '0' + this.separadorDecimal + valor;
                break;
            case 3:
                valorMask = valor.substr(0, 1) + this.separadorDecimal +
                    valor.substr(1, 2);
                break;
            default:
                break;
        }

        if (valorMask === '') {
            let sepMilhar = 0;
            for (let i = (valor.length - 3); i >= 0; i--) {
                if (sepMilhar === 3) {
                    valorMask = this.separadorMilhar + valorMask;
                    sepMilhar = 0;
                }
                valorMask = valor.charAt(i) + valorMask;
                sepMilhar++;
            }
            valorMask = valorMask + this.separadorDecimal +
                valor.substr(valor.length - 2, 2);
        }

        if (this.separadorDecimal === ',') {
            this.onChange(valorMask.replace(/\./g, '').replace(',', '.'));
        } else {
            this.onChange(valorMask.replace(/\,/g, ''));
        }
        if (this.prefixo !== '') {
            valorMask = this.prefixo + ' ' + valorMask;
        }
        return valorMask;
    }
}
