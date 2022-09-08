import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiUrl } from '../app.api';
import { Observable } from 'rxjs';
import { IJogo } from '../models/IJogo';


@Injectable({
  providedIn: 'root'
})

export class JogoService{

  private requestMapping = '/jogos';

  constructor(private http: HttpClient) {}

  buscarId(idJogo: number): Observable<IJogo>{
    return this.http.get<IJogo>(`${apiUrl + this.requestMapping}/${idJogo}`);
    }

    buscarConteudo(nome: string, descricao: string): Observable<IJogo[]>{
      return this.http.get<IJogo[]>(`${apiUrl + this.requestMapping}?conteudo=${nome}&descricao=${descricao}`);
    }

}
