import { DadosService } from './../services/dados.service';
import { IFilme } from '../models/IFilme.model';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  titulo = 'Filmes';

  listaVideos: IFilme[]= [
    {
      nome: 'Coraline',
      descricao:  '23/07/2004',
      conteudo: '1h 48m',
      tipo: '1h 48m',
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/huwNCvLZMET25n6QuOG7e1VwHss.jpg',
      generos: ['Ficção científica', 'Drama', 'Romance'],
    },
    {
      nome: 'Tempos Modernos',
      descricao:  '30/03/1936',
      conteudo: '1h 27m',
      tipo: '1h 48m',
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ewqW0uEx1FztaRSvJQqH4pxHecZ.jpg',
      generos:['Comédia', 'Drama'],
    },
    {
      nome: 'A Noiva Cadáver',
      descricao:  '21/10/2005',
      conteudo: '1h 17m',
      tipo: '1h 48m',
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/89B6W9mlTfSxeMEFMSyRBViXy83.jpg',
      generos:['Romance','Fantasia', 'Animação'],
    },
    {
    nome: 'Star Wars',
    descricao:  '17/11/1977',
    conteudo: '2h 1m',
    tipo: '1h 48m',
    cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/dw7X9YPjjAfIxKHW04V64Bb9TB0.jpg',
    generos:['Aventura, ','Ação, ', 'Ficção científica'],
  },
  {
  nome: 'A Viagem de Chihiro',
  descricao: '20/07/2001',
  conteudo: '2h 6m',
  tipo: '1h 48m',
  cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/bNBXskBHOwPSW21o7iT3N8QVg9L.jpg',
  generos:['Animação, ','Família, ', 'Fantasia'],
},
{
  nome: 'A Viagem de Chihiro',
  descricao: '20/07/2001',
  conteudo: '2h 6m',
  tipo: '1h 48m',
  cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/bNBXskBHOwPSW21o7iT3N8QVg9L.jpg',
  generos:['Animação, ','Família, ', 'Fantasia'],
}
  ];

  constructor(
    public dadosService: DadosService,
    public route: Router
  ) {}

  exibirFilme(filme: IFilme){
    this.dadosService.guardarDados('filme', filme);
    this.route.navigateByUrl('/dados-filme');
  }

}
