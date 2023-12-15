
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { inovaSenha } from '../interfaces/inovaSenha';


@Injectable({
  providedIn: 'root'
})
export class NovasenhaService {

  private readonly API = "http://localhost:4200/api";




  constructor(private httpClient: HttpClient, private router: Router) {

  }

   validarToken(token :string){
    return this.httpClient.post<string>(`${this.API}/redefinirsenha/validar`,token);
   }


   salvarNovaSenha(token:string , password:string):Observable<string>{
     const body = {token:token ,password:password}
     console.log("body",body);
    return this.httpClient.post<string>(`${this.API}/redefinirsenha/novasenha`,body)
   }


}
