import { Movimentacao, TipoMovimentacao } from './../models/movimentacao';
import { Component, OnInit, Input } from '@angular/core';
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
    
    constructor() { 
        this.form = new FormGroup({
            valor: new FormControl(),
            tipo: new FormControl(),
            data: new FormControl(),
            descricao: new FormControl(),
       
        });

    }

    ngOnInit() {
        this.movimentacao = new Movimentacao();
    }

}
