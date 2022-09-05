import { Cadastro } from './cadastro.model';
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import {  EMPTY, Observable } from 'rxjs';
import { MatSnackBar} from '@angular/material/snack-bar';
import { map, catchError} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class CadastroService{
    baseUrl = "http://localhost:3000/"

    constructor (private snackBar: MatSnackBar, private http: HttpClient){ }

    showMessage (msg: string, isError: boolean = false) :void{
        this.snackBar.open(msg, 'x',{
            duration:6000,
            verticalPosition: "bottom",
            panelClass: isError ? ['errorMsg'] : ['successMsg']
        });

    }

    create(cadastro: Cadastro): Observable<Cadastro>{
        return this.http.post<Cadastro>(this.baseUrl, cadastro).pipe(
            map((obj) => obj),
            catchError( e => this.errorMsg(e))
        )
    }

    errorMsg(e: any): Observable<any>{
        console.log(e);
        this.showMessage('Erro', true);
        return EMPTY
    }

    read(): Observable<Cadastro[]>{
           return this.http.get<Cadastro[]>(this.baseUrl)
    }
   
    readById(id: number): Observable<Cadastro> {
        const url = `${this.baseUrl}/${id}`
        return this.http.get<Cadastro>(url)
    }

}
