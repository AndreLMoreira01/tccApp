import { HistoriaService } from './../services/historia.service';
import { Component, OnInit } from '@angular/core';
import { IHistoria } from '../models/IHistoria.model';

@Component({
  selector: 'app-historias',
  templateUrl: './historias.page.html',
  styleUrls: ['./historias.page.scss'],
})
export class HistoriasPage implements OnInit {

  currentHistoria = undefined;

  historias = [
    { id: 1, nome: 'Coraline', autor: 'autor', descricao: 'duduxo', tipo: 'eu nao sei', conquista: 'tipo'},
    { id: 2, nome: 'Aladdin', autor: 'autor', descricao: 'duduxo', tipo: 'eu nao sei', conquista: 'tipo'},
    { id: 3, nome: 'Alice', autor: 'autor', descricao: 'duduxo', tipo: 'eu nao sei', conquista: 'tipo'},
    { id: 4, nome: 'O Pequeno Príncip', autor: 'autor', descricao: 'duduxo', tipo: 'eu nao sei', conquista: 'tipo'},
    { id: 5, nome: 'O Mágico De Oz', autor: 'autor', descricao: 'duduxo', tipo: 'eu nao sei', conquista: 'tipo'},
    { id: 6, nome: 'Os Três Porquinhos', autor: 'autor', descricao: 'duduxo', tipo: 'eu nao sei', conquista: 'tipo'},
    { id: 7, nome: 'A Bela e a Fera', autor: 'autor', descricao: 'duduxo', tipo: 'eu nao sei', conquista: 'tipo'},
    { id: 8, nome: 'Peter Pan', autor: 'autor', descricao: 'duduxo', tipo: 'eu nao sei', conquista: 'tipo'},
    { id: 9, nome: 'O Rei Leão', autor: 'autor', descricao: 'duduxo', tipo: 'eu nao sei', conquista: 'tipo'},
    { id: 10, nome: 'Dumbo', autor: 'autor', descricao: 'duduxo', tipo: 'eu nao sei', conquista: 'tipo'},
    { id: 11, nome: 'Curupira', autor: 'autor', descricao: 'duduxo', tipo: 'eu nao sei', conquista: 'tipo'},
    { id: 12, nome: 'Saci-Pererê', autor: 'autor', descricao: 'duduxo', tipo: 'eu nao sei', conquista: 'tipo'},
    { id: 12, nome: 'Iara', autor: 'autor', descricao: 'duduxo', tipo: 'eu nao sei', conquista: 'tipo'},

  ];

  compareWith(o1, o2) {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  }

  handleChange(ev) {
    this.currentHistoria = ev.target.value;
  }

  ngOnInit(): void {

  }

  carregarHistorias(): void{

  }

}

