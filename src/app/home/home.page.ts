import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

//alert quando abre o app
export class HomePage {
  historias = [
    { id: 1, nome: 'Coraline', autor: 'autor', descricao: 'duduxo', tipo: 'eu nao sei', conquista: 'tipo'},
    { id: 2, nome: 'Coraline', autor: 'autor', descricao: 'duduxo', tipo: 'eu nao sei', conquista: 'tipo'},
    { id: 3, nome: 'Coraline', autor: 'autor', descricao: 'duduxo', tipo: 'eu nao sei', conquista: 'tipo'},
    { id: 4, nome: 'Coraline', autor: 'autor', descricao: 'duduxo', tipo: 'eu nao sei', conquista: 'tipo'},
    { id: 5, nome: 'Coraline', autor: 'autor', descricao: 'duduxo', tipo: 'eu nao sei', conquista: 'tipo'},
    { id: 6, nome: 'Coraline', autor: 'autor', descricao: 'duduxo', tipo: 'eu nao sei', conquista: 'tipo'},
    { id: 7, nome: 'Coraline', autor: 'autor', descricao: 'duduxo', tipo: 'eu nao sei', conquista: 'tipo'},
    { id: 8, nome: 'Coraline', autor: 'autor', descricao: 'duduxo', tipo: 'eu nao sei', conquista: 'tipo'},
    { id: 9, nome: 'Coraline', autor: 'autor', descricao: 'duduxo', tipo: 'eu nao sei', conquista: 'tipo'},
    { id: 10, nome: 'Coraline', autor: 'autor', descricao: 'duduxo', tipo: 'eu nao sei', conquista: 'tipo'},
    { id: 11, nome: 'Coraline', autor: 'autor', descricao: 'duduxo', tipo: 'eu nao sei', conquista: 'tipo'},
    { id: 12, nome: 'Coraline', autor: 'autor', descricao: 'duduxo', tipo: 'eu nao sei', conquista: 'tipo'},
  ];

  buscarHistoria(index: number, itemObject: any) {
    return itemObject.id;
  }

  constructor() {

   }

 ngOnInit() {
  }
}
