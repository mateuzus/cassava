import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  error: string | null = null;
  operador: any;
  form: FormGroup = new FormGroup({
    username: new FormControl(''),
  });

  constructor(private router: Router) { }

  ngOnInit() {
  }

  submit() {
    let data = this.form.value;

    if (this.operador == "9999999990" || "123")
    {
      this.router.navigate(['menu']);
    }
  }

}
