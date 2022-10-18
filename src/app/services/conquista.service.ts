import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IConquista } from '../models/IConquista.model';
import { API } from '../app.api';

@Injectable({
  providedIn: 'root'
})
export class ConquistaService{

private requestMapping = '/conquistas';

constructor(private http: HttpClient) {}

buscarId(idConquista: number): Observable<IConquista>{
return this.http.get<IConquista>(`${API + this.requestMapping}/${idConquista}`);
}

buscarConquista(nome: string, descricao: string): Observable<IConquista[]>{
return this.http.get<IConquista[]>(`${API + this.requestMapping}?nome=${nome}&descricao=${descricao}`);
}

}
