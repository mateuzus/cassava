import { Component, OnInit, ViewChild } from '@angular/core';
import { InserirFichaComponent } from '../../inserir-ficha/inserir-ficha.component';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent implements OnInit {

  @ViewChild(InserirFichaComponent, { static: false }) itemsFicha: InserirFichaComponent

  cabecalho: Array<any> = [
    {
      ficha: '1209',
      descFicha: 'Lorem lupsu also eklao',
      produto: '200E',
      descProduto: 'Amido Modificado-Cadex 200E',
      versao: '05.00',
      cliente: '0',
      descCliente: 'Desconhecido',
      responsavel: 'admin'
    }
  ]

  ficha: any = this.cabecalho[0].ficha
  descFicha: any = this.cabecalho[0].descFicha
  produto: any = this.cabecalho[0].produto
  descProduto: any = this.cabecalho[0].descProduto
  versao: any = this.cabecalho[0].versao
  cliente: any = this.cabecalho[0].cliente
  descCliente: any = this.cabecalho[0].descCliente
  responsavel: any = this.cabecalho[0].responsavel

  constructor() { }

  ngOnInit() {
  }

  pushArray(){
    let data = {
      ficha: this.itemsFicha.ficha,
      // descFicha: 'Lorem lupsu also eklao',
      // produto: '200E',
      // descProduto: 'Amido Modificado-Cadex 200E',
      // versao: '05.00',
      // cliente: '0',
      // descCliente: 'Desconhecido',
      // responsavel: 'admin'
    }
  }
}
