import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DadosService {
  private clientes: any[] = [];
  private filmes: any[] = [];
  private locacoes: any[] = [];

  constructor() { }

  // Métodos de Cliente
  adicionarCliente(cliente: any) {
    this.clientes.push(cliente);
  }

  getClientes() {
    return this.clientes;
  }

  excluirCliente(index: number) {
    if (index > -1 && index < this.clientes.length) {
      this.clientes.splice(index, 1); // Remove o cliente na posição index
    }
  }

  editarCliente(index: number, cliente: any) {
    if (index > -1 && index < this.clientes.length) {
      this.clientes[index] = cliente; // Atualiza o cliente na posição index
    }
  }

  // Métodos de Filme
  adicionarFilme(filme: any) {
    this.filmes.push(filme);
  }

  getFilmes() {
    return this.filmes;
  }

  // Métodos de Locação
  adicionarLocacao(locacao: any) {
    this.locacoes.push(locacao);
  }

  getLocacoes() {
    return this.locacoes;
  }

  // Novo método para editar uma locação
  editarLocacao(index: number, locacao: any) {
    if (index > -1 && index < this.locacoes.length) {
      this.locacoes[index] = locacao; // Substitui a locação na posição index
    }
  }

  // Não é necessário um método extra para salvar, já que a alteração na lista é realizada diretamente
}
