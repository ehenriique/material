import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { empty } from 'rxjs';
import { Login } from './login.model';
import { LoginService}  from './login.service';

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
    status: true || true,
    login: undefined,
    router: undefined
  };



  
 
  constructor(private loginService: LoginService, private router : Router) { }



  ngOnInit(): void {
    this.siteKey= '6LdqvUAiAAAAADq1aAbrjmGHzdwzl-pDL6FLaf2D';


  }
  efetuarLogin(): void {
    
                if (this.login.status == true,Validators.minLength(3),Validators.email)
                {
                  alert ( "Login feito com Sucesso");
                } else {
                  alert ( " Login não realizado")
                }
               
            }
            catch ()
            {
                console.log("Unknown error occurred");
            }



  cancelarLogin(): void{
    this.router.navigate([''])
  }
}


