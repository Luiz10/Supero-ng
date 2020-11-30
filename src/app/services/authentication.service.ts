import { Usuario } from './../model/usuario';
import { Token } from '@angular/compiler/src/ml_parser/lexer';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable()
export class AutenticationService {

    constructor(private http: HttpClient) {

    }

    login(usuario: Usuario):Observable<Token> {
        const headers = new HttpHeaders();
        headers.append('Content-Type','application/x-www-form-urlencoded')
        headers.append('Authorization', 'Basic dXNlcjpzZW5oYQ==')

        const body = `username=${usuario.username}&password=${usuario.senha}&grant_type=password`;

        return this.http.post<Token>('http://localhost:8081/api/oauth/token',body , {headers});
    }
}

