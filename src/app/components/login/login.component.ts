import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThfDialogService, ThfSelectOption } from '@totvs/thf-ui';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: any
  senha: any
  cliente: any

  options: Array<ThfSelectOption> = [
    { label: 'Companhia 1', value: '1' },
    { label: 'Companhia 2', value: '2' },
    { label: 'Companhia 3', value: '3' }
  ]

  constructor(private router: Router,
    public thfDialog: ThfDialogService) { }

  ngOnInit() {
  }

  submit() {
    let data = [
      { login: this.login, senha: this.senha }
    ]
    if (this.login == "123" && this.senha == "123") {
      this.router.navigate(['menu']);
    } else {
      this.thfDialog.alert({ title: 'Atenção', message: 'Senha ou login incorreto!!' })
    }
  }

}
