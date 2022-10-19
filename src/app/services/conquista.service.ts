import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IConquista } from '../models/IConquista.model';
import { API } from '../app.api';

@Injectable({
  providedIn: 'root'
})
export class ConquistaService{


private url =  API + '/conquistas';

constructor(private http: HttpClient) {}

buscarConquista(): Observable<IConquista[]> {
  return this.http.get<IConquista[]>(`${this.url}/todos`).pipe(
    (retorno => retorno));
  }

  buscarConquistaPeloId(idConquista: number): Observable<IConquista> {
    return this.http.get<IConquista>(`${this.url}/${idConquista}`).pipe(
      (retorno => retorno)
    );
  }

}
