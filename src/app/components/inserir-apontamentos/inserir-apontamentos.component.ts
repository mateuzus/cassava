import { Component, Input, OnInit, Output } from "@angular/core";
import { ThfRadioGroupOption, ThfSelectOption } from "@totvs/thf-ui";

@Component({
  selector: "app-inserir-apontamentos",
  templateUrl: "./inserir-apontamentos.component.html",
  styleUrls: ["./inserir-apontamentos.component.css"],
})
export class InserirApontamentosComponent implements OnInit {
  options: Array<ThfRadioGroupOption> = [
    { label: "Geral", value: "1" },
    { label: "Pallet", value: "2" },
    { label: "Sacaria", value: "3" },
    { label: "Alterado", value: "4" },
  ];

  horas: Array<any> = [
    { label: "15 minutos", value: 15 },
    { label: "30 minutos", value: 30 },
    { label: "45 minutos", value: 45 },
    { label: "1 hora", value: 60 },
  ];

  place: string = "Selecione a hora padrão";
  seq: string = "";
  desc: string = "";
  optionSelected: ThfRadioGroupOption;
  apos: string = "";
  numero: string = "";
  tpResult: string = "";
  resultado: string = "";
  horaSelecionada: any = 'Selecione a hora'

  data = new Date();
  hora = new Date();
  horaAtual: any;
  dataAtual: any;

  dataFormatada: any;

  constructor() {}

  ngOnInit() {
    this.dataAtual = this.formatDate(this.data);
    this.horaAtual = this.formatHours(this.hora);
  }

  adicionarTempo() {
    let date = this.hora;
    let h = date.getHours();
    let min = date.getMinutes();
    let d = date.getDate();
    let m = date.getMonth() + 1;
    let y = date.getFullYear();

    let hora = h < 10 ? "0" + h : h;
    let minutos = min < 10 ? "0" + min : min;
    let dia = d < 10 ? "0" + d : d;
    let mes = m < 10 ? "0" + m : m;
    let ano = y < 10 ? "0" + y : y;

    let dateAdd = `${ano}-${mes}-${dia}T${hora}:${minutos}`;

    console.log(dateAdd)
    let data = new Date(dateAdd);
    console.log(data)
    let addMinutos: any = this.hora

    data.setMinutes(data.getMinutes() + 60);
    console.log(data)
    this.hora = data
    console.log(this.hora)
    this.horaAtual = this.formatHours(this.hora);
    this.dataAtual = this.formatDate(this.hora)
    console.log(this.horaAtual)
  }

  zeroFill(n) {
    return n < 9 ? `0${n}` : `${n}`;
  }

  formatHours(date) {
    const h = this.zeroFill(date.getHours());
    const m = this.zeroFill(date.getMinutes());
    return `${h}:${m}`;
  }

  formatDate(date) {
    const d = this.zeroFill(date.getDay());
    const m = this.zeroFill(date.getMonth() + 1);
    const y = this.zeroFill(date.getFullYear());
    return `${d}/${m}/${y}`;
  }
}
