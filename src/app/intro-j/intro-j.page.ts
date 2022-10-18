import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EndingPage } from '../ending/ending.page';
import { IHistoria } from '../models/IHistoria.model';
import { HistoriaService } from '../services/historia.service';



@Component({
  selector: 'app-intro-j',
  templateUrl: './intro-j.page.html',
  styleUrls: ['./intro-j.page.scss'],
})
export class IntroJPage implements OnInit {

  historias: IHistoria[] = [];
  constructor(private historiaService: HistoriaService) { }

  ngOnInit() {
 this.listarHistorias();
  }

  listarHistorias() {
    this.historiaService.buscarHistoria().subscribe(retornoHistoria => {
      this.historias = retornoHistoria;
    }
    );
  }



}
