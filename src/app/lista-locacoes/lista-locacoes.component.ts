import { Component } from '@angular/core';
import { DadosService } from '../dados.service';

@Component({
  selector: 'app-lista-locacoes',
  templateUrl: './lista-locacoes.component.html',
  styleUrls: ['./lista-locacoes.component.css']
})
export class ListaLocacoesComponent {
  locacoes: any[] = [];
  locacaoEditando: any = null; // Para armazenar a locação que está sendo editada

  constructor(private dadosService: DadosService) {
    this.locacoes = this.dadosService.getLocacoes();
  }

  excluirLocacao(index: number) {
    this.locacoes.splice(index, 1);
    this.dadosService.adicionarLocacao(this.locacoes); // Atualiza as locações no serviço
    alert('Locação excluída com sucesso!');
  }

  // Método para editar uma locação
  editarLocacao(index: number) {
    this.locacaoEditando = { ...this.locacoes[index] }; // Faz uma cópia da locação
  }

  // Método para salvar as alterações da locação
  salvarEdicao() {
    const index = this.locacoes.findIndex(locacao => locacao.cliente.nome === this.locacaoEditando.cliente.nome);
    if (index !== -1) {
      // Chama o método do serviço para editar a locação
      this.dadosService.editarLocacao(index, this.locacaoEditando);
    }
    this.locacaoEditando = null; // Fecha o formulário de edição
  }

  // Método para cancelar a edição
  cancelarEdicao() {
    this.locacaoEditando = null;
  }
}
