import { MenuComponent } from './../menu/menu.component';
import { TabelaApontamentosService } from './../../services/tabela-apontamentos.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ThfTableColumn } from '@totvs/thf-ui';

@Component({
  selector: 'app-tabela-apontamentos',
  templateUrl: './tabela-apontamentos.component.html',
  styleUrls: ['./tabela-apontamentos.component.css']
})
export class TabelaApontamentosComponent implements OnInit {

  /* @ViewChild(MenuComponent, { static: false }) itensApont: MenuComponent */

  constructor(private serviceApontamento: TabelaApontamentosService) { }

  columns: Array<ThfTableColumn>

  itensApont: MenuComponent
  items: Array<any> = []

  ngOnInit() {
    this.loadColumnsApontamentos()
  }

  loadColumnsApontamentos(): this {
    this.columns = this.serviceApontamento.getColumnsApontamentos()
    return this
  }

}
