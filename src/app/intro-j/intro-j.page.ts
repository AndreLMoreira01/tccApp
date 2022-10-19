import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IJogo } from '../models/IJogo';
import { JogoService } from '../services/jogo.service';




@Component({
  selector: 'app-intro-j',
  templateUrl: './intro-j.page.html',
  styleUrls: ['./intro-j.page.scss'],
})
export class IntroJPage implements OnInit {

  jogo: IJogo;

  constructor(private jogoService: JogoService ,
    private activatedRoute: ActivatedRoute
    ) { }

    ngOnInit() {
    this.exibirJogo();
    }

    exibirJogo() {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('idJogo'));
    this.jogoService.buscarJogoPeloId(1).subscribe(retorno => {
      this.jogo = retorno;
    });
  }


}
