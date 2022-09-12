import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Login } from './login.model';
import { LoginService}  from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {


  login : Login= {
    email: '' ,
    senha: ''

  };


   email = new FormControl ('', [Validators.required, Validators.email]);
   getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Digite um e-mail valido';
    }

    return this.email.hasError('email') ? 'Não é um e-mail valido' : '';
  };

  
 
  constructor(private loginService: LoginService, private router : Router) { }

  ngOnInit(): void {
   
  }



  creatLogin(): void{
    this.loginService.create(this.login).subscribe(() =>{
      this.loginService.showMessage('Usuario Cadastrado!')
    })
  }
  
  
  cancelarLogin(): void{
    this.router.navigate([''])
  }
}

