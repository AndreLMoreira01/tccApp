import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IHistoria } from '../models/IHistoria.model';
import { API } from '../app.api';



@Injectable({
  providedIn: 'root'
})
export class HistoriaService{

  private url =  API + '/historias';

  constructor(private http: HttpClient) { }

buscarHistoria(): Observable<IHistoria[]> {
return this.http.get<IHistoria[]>(`${this.url}/todos`).pipe(
  (retorno => retorno));
}

buscarHistoiraPeloId(id: number): Observable<IHistoria> {
  return this.http.get<IHistoria>(`${this.url}/${id}`).pipe(
    (retorno => retorno)
  );
}

};

