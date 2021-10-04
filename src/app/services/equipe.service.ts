import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Equipe } from '../models/equipe.model';


const baseUrl = 'http://localhost:8080/';
@Injectable({
  providedIn: 'root'
})
export class EquipeService {

  equipes?: Equipe[];
  equipe:Equipe = {
    descricao: ''
    
  };


  constructor(private http:HttpClient) { }


getAll():Observable<Equipe[]>{
   console.log("consultando: "+baseUrl+"api/v1/equipes/list")
  return this.http.get<Equipe[]>(baseUrl+"api/v1/equipes/list");
}

}
