import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IHistoria } from '../models/IHistoria.model';
import { HistoriaService } from '../services/historia.service';

@Component({
  selector: 'app-cucu',
  templateUrl: './cucu.page.html',
  styleUrls: ['./cucu.page.scss'],
})
export class CucuPage implements OnInit {

  historia: IHistoria;

  constructor(private historiaService: HistoriaService,
    private activatedRoute: ActivatedRoute
    ) { }

    ngOnInit() {
    this.exibirHistoria();
    }

   exibirHistoria() {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('idHistoria'));
    this.historiaService.buscarHistoiraPeloId(id).subscribe(retorno => {
      this.historia = retorno;
    });
  }
 

}
