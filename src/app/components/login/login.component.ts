import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: any
  senha: any

  constructor(private router: Router) { }

  ngOnInit() {
  }

  submit() {
    let data = [
      { login: this.login, senha: this.senha }
    ]
    console.log(data)
    if (this.login == "123" && this.senha == "123") {
      this.router.navigate(['menu']);
    } else {
      console.log('Senha incorreta!')
    }
  }

}
