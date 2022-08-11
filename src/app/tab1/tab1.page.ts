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
      nome: 'Aladdin',
      descricao:  'Descrição',
      conteudo: 'História Aqui',
      cartaz: 'https://br.web.img3.acsta.net/pictures/210/506/21050616_20131017211827208.jpg',
      generos: ['Ficção científica', 'Drama', 'Romance'],
    },
    {
      nome: 'Alice',
      descricao:  '30/03/1936',
      conteudo: '1h 27m',
      cartaz: 'https://images-na.ssl-images-amazon.com/images/I/71OjIa8EQzL.jpg',
      generos:['Comédia', 'Drama'],
    },
    {
      nome: 'O Mágico de Oz',
      descricao:  '21/10/2005',
      conteudo: '1h 17m',
      cartaz: 'https://br.web.img3.acsta.net/medias/nmedia/18/93/94/10/20287529.jpg',
      generos:['Romance','Fantasia', 'Animação'],
    },
    {
    nome: 'Os 3 Porquinhos',
    descricao:  '17/11/1977',
    conteudo: '2h 1m',
    cartaz: 'https://www.escala.com.br/fotos/extragrande/727fe1/os-tres-porquinhos-colecao-meus-primeiros-classicos.jpg',
    generos:['Aventura, ','Ação, ', 'Ficção científica'],
  },
  {
  nome: 'A Bela E A Fera',
  descricao: '20/07/2001',
  conteudo: '2h 6m',
  cartaz: 'https://br.web.img3.acsta.net/pictures/17/01/09/12/22/442219.jpg',
  generos:['Animação, ','Família, ', 'Fantasia'],
},
{
  nome: 'Peter Pan',
  descricao: '20/07/2001',
  conteudo: '2h 6m',
  cartaz: 'https://cdnv2.moovin.com.br/editorarideel/imagens/produtos/det/b059f85ee2.jpg',
  generos:['Animação, ','Família, ', 'Fantasia'],
},
{
  nome: 'Coraline',
  descricao: '20/07/2001',
  conteudo: '2h 6m',
  cartaz: 'https://images.justwatch.com/poster/237979639/s718/coraline-e-o-mundo-secreto.%7Bformat%7D',
  generos:['Animação, ','Família, ', 'Fantasia'],
},
{
  nome: 'O Rei Leão',
  descricao: '20/07/2001',
  conteudo: '2h 6m',
  cartaz: 'https://images-na.ssl-images-amazon.com/images/I/81G5DqNT2SL.jpg',
  generos:['Animação, ','Família, ', 'Fantasia'],
},
{
  nome: 'Dumbo',
  descricao: '20/07/2001',
  conteudo: '2h 6m',
  cartaz: 'https://images-na.ssl-images-amazon.com/images/I/91QZvpx-4xL.jpg',
  generos:['Animação, ','Família, ', 'Fantasia'],
},
{
  nome: 'Curupira',
  descricao: '20/07/2001',
  conteudo: '2h 6m',
  cartaz: 'https://s1.static.brasilescola.uol.com.br/be/conteudo/images/protetor-da-floresta.jpg',
  generos:['Animação, ','Família, ', 'Fantasia'],
},
{
  nome: 'Saci-Pererê',
  descricao: '20/07/2001',
  conteudo: '2h 6m',
  cartaz: 'https://s4.static.brasilescola.uol.com.br/be/conteudo/images/saci-perere.jpg',
  generos:['Animação, ','Família, ', 'Fantasia'],
},
{
  nome: 'Iara',
  descricao: '20/07/2001',
  conteudo: '2h 6m',
  cartaz: 'https://s3.static.brasilescola.uol.com.br/be/2020/08/iara.jpg',
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
