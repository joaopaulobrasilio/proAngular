import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http'

import { Observable, catchError, first, retry, tap } from 'rxjs';
import { IAcesso } from '../interfaces/iacesso';


@Injectable({
  providedIn: 'root'
})
export class AcessoService {
   private readonly API = 'http://localhost:4200/api'

  constructor(private httpClient : HttpClient) { }


       list():Observable<any>{
        return this.httpClient.get(this.API).pipe(
          tap( acessos =>{
             console.log(acessos);
          })
        )


     }
}
