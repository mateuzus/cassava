import { TabelaApontamentosService } from './../../services/tabela-apontamentos.service';
import { TabelaExameService } from './../../services/tabela-exame.service';
import { Component, OnInit } from '@angular/core';
import { ThfTableColumn } from '@totvs/thf-ui';

@Component({
  selector: 'app-tabela-apontamentos',
  templateUrl: './tabela-apontamentos.component.html',
  styleUrls: ['./tabela-apontamentos.component.css']
})
export class TabelaApontamentosComponent implements OnInit {

  constructor(private serviceApontamento: TabelaApontamentosService) { }

  columns: Array<ThfTableColumn>

  ngOnInit() {
    this.loadColumnsApontamentos()
  }

  loadColumnsApontamentos(): this {
    this.columns = this.serviceApontamento.getColumnsApontamentos()
    return this
  }

}
