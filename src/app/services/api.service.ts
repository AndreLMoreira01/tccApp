import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // private api: string = 'caminho-da-api'

  constructor(private http: HttpClient) { }
}
