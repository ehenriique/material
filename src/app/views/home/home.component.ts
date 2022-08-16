
import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  
  public titulo!: string;
  public texto!: string;
   public longText!: string;

  constructor( ){

  }


  ngOnInit(): void {
    this.titulo!  =  "Loja Games-Mania";
    this.texto! = " lorem ipsum e simplemntes";
    this.longText! =  " lorem ipsum e simplemntes kakdmka";
  }

}
