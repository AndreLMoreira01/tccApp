import { Component, OnInit } from '@angular/core';
import { IHistoria } from '../models/IHistoria.model';
import { HistoriaService } from '../services/historia.service';

@Component({
  selector: 'app-historias',
  templateUrl: './historias.page.html',
  styleUrls: ['./historias.page.scss'],
})
export class HistoriasPage implements OnInit {

  historias: IHistoria[] = [];
  constructor(private historiaService: HistoriaService) { }


  ngOnInit(): void {
    this.listarHistorias();
  }

  listarHistorias() {
    this.historiaService.buscarHistoria().subscribe(retornoHistoria => {
      this.historias = retornoHistoria;
    }
    );
  }


}

