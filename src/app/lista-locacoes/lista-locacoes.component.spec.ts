import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaLocacoesComponent } from './lista-locacoes.component';

describe('ListaLocacoesComponent', () => {
  let component: ListaLocacoesComponent;
  let fixture: ComponentFixture<ListaLocacoesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaLocacoesComponent]
    });
    fixture = TestBed.createComponent(ListaLocacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
