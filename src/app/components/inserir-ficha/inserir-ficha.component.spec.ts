import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InserirFichaComponent } from './inserir-ficha.component';

describe('InserirFichaComponent', () => {
  let component: InserirFichaComponent;
  let fixture: ComponentFixture<InserirFichaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InserirFichaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InserirFichaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
