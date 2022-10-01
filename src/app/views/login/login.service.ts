import { Login } from './login.model';
import { LoginComponent } from './login.component';
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import {  EMPTY, Observable } from 'rxjs';
import { MatSnackBar} from '@angular/material/snack-bar';
import { map, catchError} from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})

export class LoginService{
    baseUrl = "http://localhost:3000/"

    constructor (private snackBar: MatSnackBar, private http: HttpClient){
        
     }

    showMessage (msg: string, isError: boolean = false) :void{
        this.snackBar.open(msg, 'x',{
            duration:6000,
            verticalPosition: "bottom",
            panelClass: isError ? ['errorMsg'] : ['successMsg']
        });

    }

    }

   


