import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroClientesComponent } from './cadastro-clientes/cadastro-clientes.component';
import { CadastroFilmesComponent } from './cadastro-filmes/cadastro-filmes.component';
import { LocacaoComponent } from './locacao/locacao.component';
import { ListaLocacoesComponent } from './lista-locacoes/lista-locacoes.component';

const routes: Routes = [
  { path: 'cadastro-clientes', component: CadastroClientesComponent },
  { path: 'cadastro-filmes', component: CadastroFilmesComponent },
  { path: 'locacao', component: LocacaoComponent },
  { path: 'lista-locacoes', component: ListaLocacoesComponent },
  { path: '', redirectTo: '/cadastro-clientes', pathMatch: 'full' }, // Redireciona para o cadastro de clientes por padrão
  { path: '**', redirectTo: '/cadastro-clientes' } // Redireciona para o cadastro de clientes se a rota não for encontrada
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
