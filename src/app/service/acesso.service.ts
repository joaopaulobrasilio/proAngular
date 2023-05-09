import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http'
import { API_PATH } from 'src/environments/environment.development';
import { Observable, catchError, first, retry } from 'rxjs';
import { IAcesso } from '../interfaces/iacesso';


@Injectable({
  providedIn: 'root'
})
export class AcessoService {
   ///private readonly API = 'http://localhost:8080/api/'
  constructor(private httpClient : HttpClient) { }


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

       list():Observable<any>{
        return this.httpClient.get(`${API_PATH}`);

     }
}
