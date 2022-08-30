import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiUrl } from '../app.api';
import { Observable } from 'rxjs';
import { IHistoria } from '../models/IHistoria.model';



@Injectable({
  providedIn: 'root'
})
export class HistoriaService{

private requestMapping = '/historias';

constructor(private http: HttpClient) {}


buscarId(idHistoria: number): Observable<IHistoria>{
return this.http.get<IHistoria>(`${apiUrl + this.requestMapping}/${idHistoria}`);
}


}

