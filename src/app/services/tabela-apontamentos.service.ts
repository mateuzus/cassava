import { ThfTableColumn } from '@totvs/thf-ui';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TabelaApontamentosService {

  constructor() { }

  getColumnsApontamentos(): Array<ThfTableColumn> {
    return [
      { property: '', label: 'Seq' },
      { property: '', label: 'Tipo' },
      { property: '', label: 'Exame' },
      { property: '', label: 'Componente' },
      { property: '', label: 'Num Embal' },
      { property: '', label: 'Tp Result' },
      { property: '', label: 'Resultado' },
      { property: '', label: 'Data' },
      { property: '', label: 'Hora' },
      { property: '', label: 'Usuário' },
    ]
  }
}
