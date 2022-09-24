import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiUrl } from '../app.api';
import { Observable } from 'rxjs';
import { IHistoria } from '../models/IHistoria.model';



@Injectable({
  providedIn: 'root'
})
export class HistoriaService{

  constructor(private http: HttpClient) { }

  listHistorias(): IHistoria[] {
    return [

    ];
  }
};

