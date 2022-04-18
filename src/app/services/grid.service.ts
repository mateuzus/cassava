import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GridService {

  constructor() { }

  columnsGrid(): Array<any> {
    return [
      { property: 'seq', label: 'Seq', align: 'left', readonly: true, freeze: true, width: 60 },
      { property: 'especializacao', label: 'Especialização', align: 'left', readonly: true, freeze: true, width: 220 },
      { property: 'abertura', label: 'Abertura Tela', align: 'left', readonly: true, freeze: true, width: 110 },
      { property: 'peso', label: 'Peso', align: 'left', freeze: true, width: 100 },
      { property: 'porcentagem', label: '%', align: 'left', freeze: true, width: 80 },
      { property: 'padrao', label: 'Peso Padrão', align: 'left', readonly: true, freeze: true, width: 80 },
      { property: 'sinal', label: 'Sinal', align: 'left', readonly: true, freeze: true, width: 66 },
    ]
  }
}
