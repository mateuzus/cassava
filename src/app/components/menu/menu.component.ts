import { InserirApontamentosComponent } from './../inserir-apontamentos/inserir-apontamentos.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ThfMenuItem, ThfModalAction, ThfModalComponent, ThfRadioGroupOption, ThfTableColumn, ThfTableComponent } from '@totvs/thf-ui';
import { TabelaExameService } from 'src/app/services/tabela-exame.service';
import { TabelaApontamentosService } from 'src/app/services/tabela-apontamentos.service';
import { InserirFichaComponent } from '../inserir-ficha/inserir-ficha.component';
import { GridService } from 'src/app/services/grid.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @ViewChild(ThfModalComponent, { static: true }) thfModal: ThfModalComponent;
  @ViewChild(ThfTableComponent, { static: true }) thfTable: ThfTableComponent;
  @ViewChild(InserirApontamentosComponent, { static: false }) apontamentos: InserirApontamentosComponent
  @ViewChild(InserirFichaComponent, { static: false }) inserirFicha: InserirFichaComponent

  columnsExame: Array<ThfTableColumn>
  columnsApont: Array<ThfTableColumn>
  columnsGrid: Array<any>
  modal_type = ''
  title: string = ''
  itemsApont: Array<any> = []
  ficha
  optionSelected: ThfRadioGroupOption
  index

  options: Array<ThfRadioGroupOption> = [
    { label: 'Geral', value: '1' },
    { label: 'Pallet', value: '2' },
    { label: 'Sacaria', value: '3' },
    { label: 'Alterado', value: '4' }
  ]

  itemsExames: Array<any> = [
    {
      exame: 'Sensoriais',
      componente: 'Cor',
      referencia: 'Branco',
      mostrar: 'Apontamento',
      resultado: 'Branco',
      unidade: '',
      impr: 'Sim',
      local: 'Interno',
      frequencia: 'Todo Lo'
    },
    {
      exame: 'Sensoriais',
      componente: 'Cor',
      referencia: 'Pó Fino',
      mostrar: 'Apontamento',
      resultado: 'Pó Fino',
      unidade: '',
      impr: 'Sim',
      local: 'Interno',
      frequencia: 'Todo Lo'
    }
  ]

  itensApontamento: Array<any> = [
    {
      seq: '1',
      tipo: 'Alterado',
      exame: 'Sensoriais',
      componente: 'Cor',
      numemb: '0',
      tpresult: 'Tabela',
      resultado: 'Creme Claro',
      data: '06/11/2020',
      hora: '09:43',
      user: 'admin'
    },
    {
      seq: '2',
      tipo: 'Geral',
      exame: 'Sensoriais',
      componente: 'Cor',
      numemb: '0',
      tpresult: 'Tabela',
      resultado: 'Creme Claro',
      data: '09/11/2020',
      hora: '11:49',
      user: 'admin'
    }
  ]

  data: Array<any> = [
    {
      seq: '10',
      especializacao: '< 4.00mm - Max. 2%',
      abertura: '3.35mm',
      peso: '0,00',
      porcentagem: '0,00',
      padrao: '200',
      sinal: '+',
    },
    {
      seq: '20',
      especializacao: '4,00 - 5,60mm - Min. 96%',
      abertura: '4.00mm',
      peso: '0,00',
      porcentagem: '0,00',
      padrao: '200',
      sinal: '+',
    },
    {
      seq: '20',
      especializacao: '< 4.00mm - Max. 2%',
      abertura: '4.75mm',
      peso: '0,00',
      porcentagem: '0,00',
      padrao: '200',
      sinal: '+',
    },
    {
      seq: '30',
      especializacao: '> 5.60mm - Max. 2%',
      abertura: '5.60mm',
      peso: '0,00',
      porcentagem: '0,00',
      padrao: '200',
      sinal: '+',
    }
  ]

  menus: Array<ThfMenuItem> = [
    { label: 'home', action: this.printMenuAction, icon: 'thf-icon-home', shortLabel: 'Home' }
  ];

  constructor(private router: Router,
    private serviceExame: TabelaExameService,
    private serviceApontamento: TabelaApontamentosService,
    private serviceGrid: GridService) { }

  ngOnInit(): void {
    this.loadTableColumns()
    this.addActionOnItensApont()
  }

  loadTableColumns(): this {
    this.columnsExame = this.serviceExame.getColumnsExames()
    this.columnsApont = this.serviceApontamento.getColumnsApontamentos(this)
    this.columnsGrid = this.serviceGrid.columnsGrid()
    return this
  }

  printMenuAction() {
    this.router.navigate(['menu'])
  }
  //Ações primárias
  private modal_primary_action_confirm_filter: ThfModalAction = {
    label: 'Confirmar',
    danger: false,
    action: () => {
      alert('requisição sendo feita')
    }
  }

  private modal_primary_action_confirm_apont: ThfModalAction = {
    label: 'Confirmar',
    danger: false,
    action: () => {
      this.itensApontamento.push({ seq: this.apontamentos.seq })
      this.addActionOnItensApont()
      console.log(this.itemsApont)
      this.thfModal.close()
    }
  }

  private modal_primary_action_confirm_ficha: ThfModalAction = {
    label: 'Confirmar',
    danger: false,
    action: () => {
      this.ficha = this.inserirFicha.ficha
      console.log(this.ficha)
      this.thfModal.close()
    }
  }

  private modal_primary_action_confirm_digit: ThfModalAction = {
    label: 'Confirmar',
    danger: false,
    action: () => {
      let obj = this.itensApontamento[this.index + 1]
      console.log(obj)
      this.index = this.itensApontamento.indexOf(obj)
      console.log(this.index)
    }
  }

  //Ações secundárias
  private modal_secondary_action_close: ThfModalAction = {
    label: 'Cancelar',
    danger: true,
    action: () => {
      this.thfModal.close()
    }
  }

  addActionOnItensApont(): void {
    this.itensApontamento = this.itensApontamento.map((item) => {
      item["actions"] = ["deletar", "digitar"]
      return item
    })
  }

  //Ações primárias dos modais
  getPrimaryActions(): any {
    let actions = {
      filter: this.modal_primary_action_confirm_filter,
      apontamento: this.modal_primary_action_confirm_apont,
      ficha: this.modal_primary_action_confirm_ficha,
      digitacao: this.modal_primary_action_confirm_digit
    }

    return actions[this.modal_type]

  }

  //Ações secundárias dos modais
  getSecondaryActions(): any {
    let actions = {
      filter: this.modal_secondary_action_close,
      apontamento: this.modal_secondary_action_close,
      ficha: this.modal_secondary_action_close,
      digitacao: this.modal_secondary_action_close
    }

    return actions[this.modal_type]
  }

  openFichaModal() {
    this.modal_type = 'ficha'
    this.title = 'Nova ficha'
    this.thfModal.open()
  }

  openApontModal() {
    this.modal_type = 'apontamento'
    this.title = 'Apontamento do Exame'
    this.thfModal.open()
  }

  digitacaoApont(row: any) {
    this.index = this.itensApontamento.indexOf(row)
    this.modal_type = 'digitacao'
    this.thfModal.open()
  }

  deleteRowApont(row: any): void {
    this.itensApontamento = this.itensApontamento.filter((item) => {
      return item != row
    })
  }

}
