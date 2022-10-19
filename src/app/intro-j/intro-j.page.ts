import { EndingBComponent } from './../ending-b/ending-b.component';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { IHistoria } from '../models/IHistoria.model';
import { HistoriaService } from '../services/historia.service';



@Component({
  selector: 'app-intro-j',
  templateUrl: './intro-j.page.html',
  styleUrls: ['./intro-j.page.scss'],
})
export class IntroJPage implements OnInit {

  historia: IHistoria;
  
  constructor(private historiaService: HistoriaService,
    private activatedRoute: ActivatedRoute
    ) { }

    ngOnInit() {
    this.exibirHistoria();
    }

   exibirHistoria() {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('idHistoria'));
    this.historiaService.buscarHistoiraPeloId(1).subscribe(retorno => {
      this.historia = retorno;
    });
  }


}
