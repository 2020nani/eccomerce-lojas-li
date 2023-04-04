export interface Produtos {
  id?: string;
  nome?: string;
  categoria?: Categoria;
  path?: string;
  quantidade?: number;
  preco?: number;
}

export enum Categoria {
  TRUFA,
  BOLO,
  DOCE,
}

export class Encomenda {
  id?: number;
  nome?: string;
  preco?: number;
  email?: string;
  quantidade?: number;

  constructor(produto: Produtos, quantidade: number, email: string) {
    this.id = 10;
    this.nome = produto.nome;
    this.email = email;
    this.preco = produto.preco;
    this.quantidade = quantidade;
  }
}
