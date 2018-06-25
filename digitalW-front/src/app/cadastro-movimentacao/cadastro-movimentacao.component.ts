import { MovimentacaoService } from './../services/movimentacao.service';
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
    @Output() depoisDeSalvar: EventEmitter<any> = new EventEmitter();
    @Output() depoisDeExcluir: EventEmitter<any> = new EventEmitter();
    
    
    constructor(private movimentacaoService: MovimentacaoService) { 
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

    salvar() {
        this.movimentacaoService.salvar(this.movimentacao).subscribe(
            dado => this.depoisDeSalvar.emit(dado),
            erro => console.log('erro', erro)
        );
    }
    
    excluir(): void {
        this.movimentacaoService.excluir(this.movimentacao).subscribe(
            data => this.depoisDeExcluir.emit(this.movimentacao),
            error => console.log('erro', error)
        );
    }
}
