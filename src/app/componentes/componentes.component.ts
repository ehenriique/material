import { Router } from '@angular/router';
import { Crud } from './componentes.model';
import { Component, OnInit } from '@angular/core';
import { ComponentesService } from './componentes.service';

@Component({
  selector: 'app-componentes',
  templateUrl: './componentes.component.html',
  styleUrls: ['./componentes.component.css']
})
export class ComponentesComponent implements OnInit {
createCrud() {
throw new Error('Method not implemented.');
}
crud: any;
  ngOnInit(): void {
    
  }

}
