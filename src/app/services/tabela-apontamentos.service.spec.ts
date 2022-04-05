import { TestBed } from '@angular/core/testing';

import { TabelaApontamentosService } from './tabela-apontamentos.service';

describe('TabelaApontamentosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TabelaApontamentosService = TestBed.get(TabelaApontamentosService);
    expect(service).toBeTruthy();
  });
});
