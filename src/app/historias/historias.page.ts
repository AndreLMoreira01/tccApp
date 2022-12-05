import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertMarsComponent } from '../alerts/alert-mars/alert-mars.component';
import { IHistoria } from '../models/IHistoria.model';
import { HistoriaService } from '../services/historia.service';

@Component({
  selector: 'app-historias',
  templateUrl: './historias.page.html',
  styleUrls: ['./historias.page.scss'],
})
export class HistoriasPage implements OnInit {

  historia: IHistoria;
  modalController: any;

  constructor(private historiaService: HistoriaService,
    private activatedRoute: ActivatedRoute) { }


  ngOnInit(): void {
    this.exibirHistoria();
  }


  exibirHistoria() {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.historiaService.buscarHistoiraPeloId(id).subscribe(retorno => {
      this.historia = retorno;
    });
  }


  unlockMars(){
    this.showModal('O planeta foi desbloqueado');
  }

  async showModal( msg ){

    const modal = await this.modalController.create({
      component: AlertMarsComponent,
      componentProps: { message: msg },
      cssClass: 'alert-mars'
    });

      await modal.present();
    }


}

