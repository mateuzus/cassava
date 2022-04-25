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

  constructor() { }

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
    console.log(d, m, y)

    let hora = h < 10 ? "0" + h : h;
    let minutos = min < 10 ? "0" + min : min;
    let dia = d < 10 ? "0" + d : d;
    let mes = m < 10 ? "0" + m : m;
    let ano = y < 10 ? "0" + y : y;

    let dateAdd = `${ano}-${mes}-${dia}T${hora}:${minutos}`;

    let data = new Date(dateAdd);

    data.setMinutes(data.getMinutes() + 60);

    this.hora = data

    this.horaAtual = this.formatHours(this.hora)
    this.dataAtual = this.formatDate(this.hora)
  }

  zeroFill(n) {
    return n < 9 ? `0${n}` : `${n}`;
  }

  formatHours(hour) {
    const h = this.zeroFill(hour.getHours());
    const m = this.zeroFill(hour.getMinutes());
    let hora = `${h}:${m}`;
    return hora
  }

  formatDate(date) {
    const d = this.zeroFill(date.getDate());
    const m = this.zeroFill(date.getMonth() + 1);
    const y = this.zeroFill(date.getFullYear());
    let data = `${d}/${m}/${y}`;
    return data
  }
}
