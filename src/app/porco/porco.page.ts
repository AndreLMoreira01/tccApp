import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IHistoria } from '../models/IHistoria.model';
import { HistoriaService } from '../services/historia.service';

@Component({
  selector: 'app-porco',
  templateUrl: './porco.page.html',
  styleUrls: ['./porco.page.scss'],
})
export class PorcoPage implements OnInit {

  historia: IHistoria;

  constructor(private historiaService: HistoriaService, private activatedRoute: ActivatedRoute) { }


  ngOnInit(): void {
    this.exibirHistoria();
  }


  exibirHistoria() {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('idHistoria'));
    this.historiaService.buscarHistoiraPeloId(3).subscribe(retorno => {
      this.historia = retorno;
    });
  }


}
