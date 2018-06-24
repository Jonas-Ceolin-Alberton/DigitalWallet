export class Movimentacao {
    id: string;
    valor: number;
    tipoMovimentacao: TipoMovimentacao
    data: Date;
    descricao: string;
}

export enum TipoMovimentacao {
    RECEITA = 'Receita',
    DESPESA = 'Despesa'
}