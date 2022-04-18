import { Component, OnInit, ViewChild } from '@angular/core';
import { ThfModalComponent, ThfRadioGroupOption } from '@totvs/thf-ui';

@Component({
  selector: 'app-inserir-ficha',
  templateUrl: './inserir-ficha.component.html',
  styleUrls: ['./inserir-ficha.component.css']
})
export class InserirFichaComponent implements OnInit {

  @ViewChild(ThfModalComponent, { static: true }) thfModal: ThfModalComponent

  options: Array<ThfRadioGroupOption> = [
    { label: 'Ficha base', value: '1' }
  ]

  optionsFabric: Array<ThfRadioGroupOption> = [
    { label: 'Finalizada', value: '1' }
  ]

  optionsSelect: Array<any> = [
    { label: 'EPC - 106 - C400 - POR - 52758 - SOLAZIME BUN - FÉCULA DE MANDIOCA C 400', value: '1' },
    { label: 'EPC - 106 - C400 - POR - 53097 - MALALÉRIO - FÉCULA DE MANDIOCA C 400', value: '2' },
    { label: 'EPC - 106 - C400 - POR - 53265 - JBS - LINS - FÉCULA DE MANDIOCA C 400', value: '3' },
    { label: 'EPC - 106 - C400 - POR - 500083 - HIKARI - FÉCULA DE MANDIOCA C 400', value: '4' }
  ]

  //váriaveis dos inputs
  ficha: any
  descricao: any
  desc: any
  produto: any
  descProd: any
  estab: any
  cliente: any
  descCliente: any
  versao: any
  lote: any
  responsavel: any
  selectedFicha: any
  fabric: any
  validade: any
  selectedFinal: any
  modal_type = ''
  selectedProduto: any = 'Selecione um produto'

  constructor() { }

  ngOnInit() {
    
  }

}
