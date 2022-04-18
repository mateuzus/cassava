import { ThfTableColumn } from '@totvs/thf-ui';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TabelaApontamentosService {

  constructor() { }

  getColumnsApontamentos(component_instance): Array<ThfTableColumn> {
    return [
      {
        property: "actions",
        label: "Ações",
        type: "icon",
        icons: [
          {
            action: (value, row) => {
              component_instance.deleteRowApont(
                value,
                row
              )
            },
            color: "primary",
            icon: "thf-icon thf-icon-delete",
            tooltip: "Clique aqui para deletar",
            value: "deletar"
          },
          {
            action: (value, row) => {
              component_instance.digitacaoApont(
                value,
                row
              )
            },
            color: "primary",
            icon: "thf-icon thf-icon-edit",
            tooltip: "Clique aqui para digitar",
            value: "digitar"
          }
        ]
      },
      { property: 'seq', label: 'Seq' },
      { property: 'tipo', label: 'Tipo' },
      { property: 'exame', label: 'Exame' },
      { property: 'componente', label: 'Componente' },
      { property: 'numemb', label: 'Num Embal' },
      { property: 'tpresult', label: 'Tp Result' },
      { property: 'resultado', label: 'Resultado' },
      { property: 'data', label: 'Data' },
      { property: 'hora', label: 'Hora' },
      { property: 'user', label: 'Usuário' },
    ]
  }
}
