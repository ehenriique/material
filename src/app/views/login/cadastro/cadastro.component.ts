import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cadastro } from './cadastro.model';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  cadastro: Cadastro = {
    usuario: '',
    senha: ''
  }

  constructor(private cadastroService: CadastroService , private router: Router) { }

  ngOnInit(): void {
  }

}
