import { Component, Input, OnInit, Output } from '@angular/core';
import { ThfRadioGroupOption } from '@totvs/thf-ui';

@Component({
  selector: 'app-inserir-apontamentos',
  templateUrl: './inserir-apontamentos.component.html',
  styleUrls: ['./inserir-apontamentos.component.css']
})
export class InserirApontamentosComponent implements OnInit {

  options: Array<ThfRadioGroupOption> = [
    { label: 'Geral', value: '1' },
    { label: 'Pallet', value: '2' },
    { label: 'Sacaria', value: '3' },
    { label: 'Alterado', value: '4' }
  ]

  seq: string = ''
  desc: string = ''
  optionSelected: ThfRadioGroupOption
  apos: string = ''
  numero: string = ''
  tpResult: string = ''
  resultado: string = ''

  data: Date = new Date();
  dia: string = String(this.data.getDate()).padStart(2, '0');
  mes: string = String(this.data.getMonth() + 1).padStart(2, '0');
  ano: any = this.data.getFullYear();
  dataAtual: string = this.dia + '/' + this.mes + '/' + this.ano

  hoje: Date = new Date()
  h: any = this.hoje.getHours()
  m: any = this.hoje.getMinutes()

  horaAtual: string = ''

  constructor() { }

  ngOnInit() {
    this.h = (this.h < 10) ? "0" + this.h : this.h
    this.m = (this.m < 10) ? "0" + this.m : this.m
    this.horaAtual = `${this.h}:${this.m}` 
  }

}
