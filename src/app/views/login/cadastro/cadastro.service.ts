import { Cadastro } from './cadastro.model';
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatSnackBar} from '@angular/material/snack-bar'

@Injectable({
    providedIn: 'root'
})

export class CadastroService{
    baseUrl = "http://localhost:3000/"

    constructor (private snackBar: MatSnackBar, private http: HttpClient){ }

    showMessage (msg: string) :void{
        this.snackBar.open(msg, 'x',{
            duration:6000,
            verticalPosition: "bottom"
        });

    }

    create(cadastro: Cadastro): Observable<Cadastro>{
        return this.http.post<Cadastro>(this.baseUrl, cadastro)
    }
}
