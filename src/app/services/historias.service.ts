import { Injectable } from '@angular/core';
import { IHistoria } from '../models/IHistoria.model';
import { Question } from '../models/question';


@Injectable({
  providedIn: 'root'
})
export class HistoriaService {

    private historias: IHistoria[] = [



  ];


  constructor() {
    
  }

}
