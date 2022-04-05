import { TabelaExameService } from './../../services/tabela-exame.service';
import { Component, OnInit } from '@angular/core';
import { ThfTableColumn } from '@totvs/thf-ui';

@Component({
  selector: 'app-tabela-exames',
  templateUrl: './tabela-exames.component.html',
  styleUrls: ['./tabela-exames.component.css']
})
export class TabelaExamesComponent implements OnInit {

  columns: Array<ThfTableColumn>

  constructor(private serviceExame: TabelaExameService) { }

  ngOnInit() {
    this.loadTableColumns()
  }

  loadTableColumns(): this {
    this.columns = this.serviceExame.getColumnsExames()
    return this
  }
}
