import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiUrl } from '../app.api';
import { Observable } from 'rxjs';
import { Historia } from '../models/IHistoria';



@Injectable({
  providedIn: 'root'
})
export class HistoriaService{

private requestMapping = '/historias';

constructor(private http: HttpClient) {}

buscarId(idHistoria: number): Observable<Historia>{
return this.http.get<Historia>(`${apiUrl + this.requestMapping}/${idHistoria}`);
}

}


//buscarId(idHistoria: number): Observable<IHistoria>{
//return this.http.get<IHistoria>(`${apiUrl + this.requestMapping}/${idHistoria}`);
//}
