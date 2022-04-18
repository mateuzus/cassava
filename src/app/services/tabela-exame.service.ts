import { Injectable } from '@angular/core';
import { ThfTableColumn } from '@totvs/thf-ui';

@Injectable({
  providedIn: 'root'
})
export class TabelaExameService {

  constructor() { }

  getColumnsExames(): Array<ThfTableColumn> {
    return [
      { property: 'exame', label: 'Exame' },
      { property: 'componente', label: 'Componente' },
      { property: 'referencia', label: 'Resul. Referência' },
      { property: 'mostrar', label: 'Mostrar' },
      { property: 'resultado', label: 'Resultado' },
      { property: 'unidade', label: 'Un' },
      { property: 'impr', label: 'Impr' },
      { property: 'local', label: 'Local' },
      { property: 'frequencia', label: 'Freq' },
    ]
  }
}
