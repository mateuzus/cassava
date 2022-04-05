import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaApontamentosComponent } from './tabela-apontamentos.component';

describe('TabelaApontamentosComponent', () => {
  let component: TabelaApontamentosComponent;
  let fixture: ComponentFixture<TabelaApontamentosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabelaApontamentosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelaApontamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
