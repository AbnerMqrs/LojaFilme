import { Component } from '@angular/core';
import { DadosService } from '../dados.service';

@Component({
  selector: 'app-cadastro-clientes',
  templateUrl: './cadastro-clientes.component.html',
  styleUrls: ['./cadastro-clientes.component.css']
})
export class CadastroClientesComponent {
  nome: string = '';
  documento: string = '';
  telefone: string = '';
  endereco: string = '';
  cidade: string = '';
  estado: string = '';
  clientes: any[] = [];
  clienteIndex: number | null = null; // Para controle de edição

  constructor(private dadosService: DadosService) {
    this.clientes = this.dadosService.getClientes(); // Carrega clientes ao inicializar
  }

  cadastrarCliente() {
    const cliente = { nome: this.nome, documento: this.documento, telefone: this.telefone, endereco: this.endereco, cidade: this.cidade, estado: this.estado };
    if (this.clienteIndex !== null) {
      this.dadosService.editarCliente(this.clienteIndex, cliente); // Edita o cliente se estiver em modo de edição
      alert('Cliente editado com sucesso!');
    } else {
      this.dadosService.adicionarCliente(cliente);
      alert('Cliente cadastrado com sucesso!');
    }
    this.resetarFormulario();
    this.clientes = this.dadosService.getClientes(); // Atualiza a lista de clientes
  }

  editarCliente(index: number) {
    const cliente = this.clientes[index];
    this.nome = cliente.nome;
    this.documento = cliente.documento;
    this.telefone = cliente.telefone;
    this.endereco = cliente.endereco;
    this.cidade = cliente.cidade;
    this.estado = cliente.estado;
    this.clienteIndex = index; // Armazena o índice para edição
  }

  excluirCliente(index: number) {
    this.dadosService.excluirCliente(index);
    this.clientes = this.dadosService.getClientes(); // Atualiza a lista após exclusão
    alert('Cliente excluído com sucesso!');
  }

  private resetarFormulario() {
    this.nome = '';
    this.documento = '';
    this.telefone = '';
    this.endereco = '';
    this.cidade = '';
    this.estado = '';
    this.clienteIndex = null; // Reseta o índice
  }
}
