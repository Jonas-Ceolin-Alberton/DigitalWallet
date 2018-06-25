import { Component, OnInit } from '@angular/core';
import { Movimentacao, TipoMovimentacao } from '../models/movimentacao';
import { MovimentacaoService } from '../services/movimentacao.service';

@Component({
  selector: 'app-despesas',
  templateUrl: './despesas.component.html',
  styleUrls: ['./despesas.component.css']
})
export class DespesasComponent implements OnInit {

  cadastrarMovimentacao = false;
  movimentacoes: Array<Movimentacao> = new Array();
  constructor(private movimentacaoService: MovimentacaoService) { }

  ngOnInit() {
    this.buscarDespesas();
  }

  buscarDespesas() {
    this.movimentacaoService.listarDespesasPorIdUsuario().subscribe(
      movin => this.movimentacoes = movin,
      erro => console.log('erro', erro)
    )
  }

  adicionarALista(movimentacao: Movimentacao) {
    this.movimentacoes.unshift(movimentacao);
    this.fecharCadastro();
  }

  novaMovimentacao() {
    this.cadastrarMovimentacao = true;
  }

  fecharCadastro() {
    this.cadastrarMovimentacao = false;
  }

  removerElementoDaLista(movimentacao: Movimentacao): void {
    let index = this.movimentacoes.indexOf(movimentacao);
    if (index !== -1) {
      this.movimentacoes.splice(index, 1);
    }
  }

}
