import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { elementAt, empty } from 'rxjs';
import { Login } from './login.model';
import { LoginService}  from './login.service';
import * as CryptoJS from 'crypto-js'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {


  siteKey!: string;
  hide = true;

  login : Login= {
    email: '',
    senha: '',
    status: true || true 

  };


  constructor(private loginService: LoginService, private router : Router) { }



  ngOnInit(): void {
    this.siteKey= '6LdqvUAiAAAAADq1aAbrjmGHzdwzl-pDL6FLaf2D';

  }

  efetuarLogin(): void{
   
                if ( this.login.senha == ("" && '') && (" " && "="))
                {
                  return alert ("Login não realizado") 
                 
                } else if (this.login.email,Validators.minLength(3),Validators.email) 
                {
                  console.log ("email validado")

                } else  (this.login.status === true,Validators.minLength(3),Validators.email)
                 {
                  return console.log("Login Realizado ")
                }
            }
            catch ()
            {
                console.log("Erro Desconhecido");
            }



  cancelarLogin(): void{
    this.router.navigate([''])
  };
}


