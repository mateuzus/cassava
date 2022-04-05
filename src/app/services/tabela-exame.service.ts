import { Injectable } from '@angular/core';
import { ThfTableColumn } from '@totvs/thf-ui';

@Injectable({
  providedIn: 'root'
})
export class TabelaExameService {

  constructor() { }

  getColumnsExames(): Array<ThfTableColumn> {
    return [
      { property: '', label: 'Exame' },
      { property: '', label: 'Componente' },
      { property: '', label: 'Resul. Referência' },
      { property: '', label: 'Mostrar' },
      { property: '', label: 'Resultado' },
      { property: '', label: 'Un' },
      { property: '', label: 'Impr' },
      { property: '', label: 'Local' },
      { property: '', label: 'Freq' },
    ]
  }
}
