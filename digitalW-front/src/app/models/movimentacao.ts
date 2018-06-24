export class Movimentacao {
    id: string;
    valor: number;
    tipoMovimentacao: TipoMovimentacao
    data: Date;
    descricao: string;

    editando: boolean;
}

export enum TipoMovimentacao {
    RECEITA = 'RECEITA',
    DESPESA = 'DESPESA'
}