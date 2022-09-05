import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
})

export class LoginService{
    baseUrl = "http://localhost:3000/login"

    

 constructor (private snackBar: MatSnackBar, private http: HttpClient)   {

 }


}