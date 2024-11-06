import { Component } from '@angular/core';
import { DadosService } from '../dados.service';

@Component({
  selector: 'app-locacao',
  templateUrl: './locacao.component.html',
  styleUrls: ['./locacao.component.css']
})
export class LocacaoComponent {
  clientes: any[] = [];
  filmes: any[] = [];
  clienteSelecionado: any;
  filmeSelecionado: any;
  quantidadeDias: number = 1;
  valorTotal: number = 0;

  constructor(private dadosService: DadosService) {
    this.clientes = this.dadosService.getClientes();
    this.filmes = this.dadosService.getFilmes();
  }

  calcularValorTotal() {
    if (this.filmeSelecionado) {
      this.valorTotal = this.filmeSelecionado.valor * this.quantidadeDias;
    }
  }

  fazerLocacao() {
    if (this.clienteSelecionado && this.filmeSelecionado) {
      const locacao = {
        cliente: this.clienteSelecionado,
        filme: this.filmeSelecionado,
        quantidadeDias: this.quantidadeDias,
        valorTotal: this.valorTotal
      };
      this.dadosService.adicionarLocacao(locacao);
      alert('Locação realizada com sucesso!');
      this.resetForm();
    } else {
      alert('Por favor, selecione um cliente e um filme.');
    }
  }

  resetForm() {
    this.clienteSelecionado = null;
    this.filmeSelecionado = null;
    this.quantidadeDias = 1;
    this.valorTotal = 0;
  }
}
