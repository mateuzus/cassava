import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InserirApontamentosComponent } from './inserir-apontamentos.component';

describe('InserirApontamentosComponent', () => {
  let component: InserirApontamentosComponent;
  let fixture: ComponentFixture<InserirApontamentosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InserirApontamentosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InserirApontamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
