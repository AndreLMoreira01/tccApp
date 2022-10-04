import { Component, OnInit } from '@angular/core';
import { IConquista } from '../models/IConquista.model';
import { ConquistaService } from '../services/conquista.service';

@Component({
  selector: 'app-conquistas',
  templateUrl: './conquistas.page.html',
  styleUrls: ['./conquistas.page.scss'],
})
export class ConquistasPage implements OnInit {

  conquistas: IConquista[] = [];

  constructor(private conquistaService: ConquistaService ) { }

  ngOnInit():  void{
   this.carregarConquistas();
  }

  carregarConquistas(): void{

  }

}
