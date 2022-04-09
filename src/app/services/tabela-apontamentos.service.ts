import { ThfTableColumn } from '@totvs/thf-ui';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TabelaApontamentosService {

  constructor() { }

  itensApontTable

  getColumnsApontamentos(): Array<ThfTableColumn> {
    return [
      { property: 'seq', label: 'Seq' },
      { property: 'tipo', label: 'Tipo' },
      { property: 'exame', label: 'Exame' },
      { property: 'componente', label: 'Componente' },
      { property: 'numemb', label: 'Num Embal' },
      { property: 'tpresult', label: 'Tp Result' },
      { property: 'resultado', label: 'Resultado' },
      { property: 'data', label: 'Data' },
      { property: 'hota', label: 'Hora' },
      { property: 'user', label: 'Usuário' },
    ]
  }
}
