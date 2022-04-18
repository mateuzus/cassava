import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent implements OnInit {

  ficha: any = '1209'
  descFicha: any = 'Lorem lupsu also eklao'
  produto: any = '200E'
  descProduto: any = 'Amido Modificado-Cadex 200E'
  versao: any = '05.00'
  cliente: any = '0'
  descCliente: any = 'Desconhecido'
  responsavel: any = 'admin'

  constructor() { }

  ngOnInit() {
    this.descFicha.toUpperCase()
    console.log(this.descFicha)
  }

}
