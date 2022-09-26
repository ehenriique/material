import { ContatoComponent } from './../views/contato/contato.component';
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { HttpClient } from "@angular/common/http";
import { Crud } from './componentes.model';
import { Observable } from "rxjs";



@Injectable({
    providedIn: 'root'
})

export class ComponentesService {
    baseUrl = "http://localhost:3002//crud"

constructor(private snackBar: MatSnackBar, private http: HttpClient){

}

showMessege(msg: string): void{
    this.snackBar.open(msg, 'X',{
        duration:6000,
        verticalPosition: "bottom"
    });
}


}
