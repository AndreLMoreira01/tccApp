import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from '../app.api';
import { Observable } from 'rxjs';
import { IJogo } from '../models/IJogo';


@Injectable({
  providedIn: 'root'
})

export class JogoService{

  private url =  API + '/jogos';

  constructor(private http: HttpClient) {}

  buscarJogoPeloId(idJogo: number): Observable<IJogo> {
    return this.http.get<IJogo>(`${this.url}/${idJogo}`).pipe(
      (retorno => retorno)
    );
  }

  buscarJogo(): Observable<IJogo[]> {
    return this.http.get<IJogo[]>(`${this.url}/todos`).pipe(
      (retorno => retorno));
    }

}
