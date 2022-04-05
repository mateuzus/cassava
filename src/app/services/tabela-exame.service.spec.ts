import { TestBed } from '@angular/core/testing';

import { TabelaExameService } from './tabela-exame.service';

describe('TabelaExameService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TabelaExameService = TestBed.get(TabelaExameService);
    expect(service).toBeTruthy();
  });
});
