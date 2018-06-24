import { Movimentacao, TipoMovimentacao } from './../models/movimentacao';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'app-cadastro-movimentacao',
    templateUrl: './cadastro-movimentacao.component.html',
    styleUrls: ['./cadastro-movimentacao.component.css']
})
export class CadastroMovimentacaoComponent implements OnInit {

    @Input() movimentacaoEdicao: Movimentacao;
    movimentacao: Movimentacao;
    form: FormGroup;
    @Output() fecharCardEvent: EventEmitter<any> = new EventEmitter();
    
    constructor() { 
        this.form = new FormGroup({
            valor: new FormControl(),
            tipo: new FormControl(),
            data: new FormControl(),
            descricao: new FormControl(),
       
        });

    }

    ngOnInit() {
        if(this.movimentacaoEdicao) {
            this.movimentacao = this.movimentacaoEdicao;
        } else {
            this.movimentacao = new Movimentacao();
        }
    }

    fecharCard() {
        this.fecharCardEvent.emit();
    }

}
