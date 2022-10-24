import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IHistoria } from '../models/IHistoria.model';
import { HistoriaService } from '../services/historia.service';

@Component({
  selector: 'app-emilia',
  templateUrl: './emilia.page.html',
  styleUrls: ['./emilia.page.scss'],
})
export class EmiliaPage implements OnInit {

  historia: IHistoria;

  constructor(private historiaService: HistoriaService, private activatedRoute: ActivatedRoute) { }


  ngOnInit(): void {
    this.exibirHistoria();
  }


  exibirHistoria() {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('idHistoria'));
    this.historiaService.buscarHistoiraPeloId(4).subscribe(retorno => {
      this.historia = retorno;
    });
  }


}
