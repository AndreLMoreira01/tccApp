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


//por id
buscarId(idHistoria: number): Observable<IHistoria>{
return this.http.get<IHistoria>(`${apiUrl + this.requestMapping}/${idHistoria}`);
}

//header historia
buscarHistoria(nome: string, descricao: string, tipo: string): Observable<IHistoria[]>{
return this.http.get<IHistoria[]>(`${apiUrl + this.requestMapping}?nome=${nome}&descricao=${descricao}&tipo=${tipo}`);
}

//conteudo historia
buscarConteudo(conteudo: string): Observable<IHistoria>{
  return this.http.get<IHistoria>(`${apiUrl + this.requestMapping}?conteudo=${conteudo}`);
}

//buscarSuaMae(conteudo: string): Observable<IHistoria>{
//  return this.http.get<IHistoria>(`${apiUrl + this.requestMapping}/${conteudo}`);
//  }

}

