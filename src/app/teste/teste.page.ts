import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { IJogo } from '../models/IJogo';
import { JogoService } from '../services/jogo.service';


@Component({
  selector: 'app-teste',
  templateUrl: './teste.page.html',
  styleUrls: ['./teste.page.scss'],
})
export class TestePage implements OnInit {

jogo: IJogo;

  constructor(private jogoService: JogoService, private route: ActivatedRoute) { }

public buscarId(): void {
  const idJogo = Number(this.route.snapshot.paramMap.get('idJogo'));
  this.jogoService.buscarId(1).subscribe(retornoJogo => {
    this.jogo = retornoJogo;
  }) 
    
  }
  
  ngOnInit() {
    this.buscarId();
  }
  
}


