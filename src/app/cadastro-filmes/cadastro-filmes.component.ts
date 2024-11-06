import { Component } from '@angular/core';
import { DadosService } from '../dados.service';

@Component({
  selector: 'app-cadastro-filmes',
  templateUrl: './cadastro-filmes.component.html',
  styleUrls: ['./cadastro-filmes.component.css']
})
export class CadastroFilmesComponent {
  nome: string = '';
  genero: string = '';
  valor: number = 0;

  constructor(private dadosService: DadosService) {}

  cadastrarFilme() {
    const filme = { nome: this.nome, genero: this.genero, valor: this.valor };
    this.dadosService.adicionarFilme(filme);
    this.nome = '';
    this.genero = '';
    this.valor = 0;
    alert('Filme cadastrado com sucesso!');
  }
}
