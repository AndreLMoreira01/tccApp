import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IHistoria } from '../models/IHistoria.model';
import { HistoriaService } from '../services/historia.service';

@Component({
  selector: 'app-historias',
  templateUrl: './historias.page.html',
  styleUrls: ['./historias.page.scss'],
})
export class HistoriasPage implements OnInit {

  historias: IHistoria[] = [];
  historia: IHistoria;

  constructor(private historiaService: HistoriaService, private activatedRoute: ActivatedRoute) { }


  ngOnInit(): void {
    this.exibirHistoria();
  }


  exibirHistoria() {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('idHistoria'));
    this.historiaService.buscarHistoiraPeloId(id).subscribe(retorno => {
      this.historia = retorno;
    });
  }


}

