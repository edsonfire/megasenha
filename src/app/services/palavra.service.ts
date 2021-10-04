import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Palavra } from '../models/palavra.model';


const baseUrl = 'http://localhost:8080/palavras';
@Injectable({
  providedIn: 'root'
})
export class PalavraService {

  palavras?: Palavra[];
  palavra:Palavra = {
    descricao: ''
    
  };


  constructor(private http:HttpClient) { }


getAll():Observable<Palavra[]>{

  return this.http.get<Palavra[]>(baseUrl);
}

}
