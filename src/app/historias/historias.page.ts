import { HistoriaService } from './../services/historia.service';
import { Component, OnInit } from '@angular/core';
import { IHistoria } from '../models/IHistoria.model';

@Component({
  selector: 'app-historias',
  templateUrl: './historias.page.html',
  styleUrls: ['./historias.page.scss'],
})
export class HistoriasPage implements OnInit {

  historias: IHistoria[] = [];

  constructor(private historiasService: HistoriaService ) { }

  ngOnInit(): void {
    this.historias = this.historiasService.listHistorias();
  }

}
