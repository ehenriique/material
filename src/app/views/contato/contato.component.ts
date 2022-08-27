import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css'],
})
export class ContatoComponent implements OnInit  {
  hide = true;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm)
  {
  
    let dados= `
    
    Nome: ${form.value.nome};
    Email: ${form.value.email};
    Texto: ${form.value.texto};`
    
  
    console.log(dados)

  }

  onSubmit2(form:NgForm)
  {
  
    let dados= `
    Email: ${form.value.email};
    Senha: ${form.value.senha2} 
    `;
  
  
  
    console.log(dados)

  }
  
}