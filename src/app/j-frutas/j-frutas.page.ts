import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-j-frutas',
  templateUrl: './j-frutas.page.html',
  styleUrls: ['./j-frutas.page.scss'],
})
export class JFrutasPage implements OnInit {

  historias = [
    { id: 1, nome: 'Coraline', tipo: 'duduxo', descricao: 'eu nao sei' },
    { id: 2, nome: 'Rei Leão', tipo: 'duduxo', descricao: 'eu nao sei'},
    { id: 3, nome: 'João E Maria', tipo: 'duduxo', descricao: 'eu nao sei' },
    { id: 4, nome: 'Turma da Mônica', tipo: 'duduxo', descricao: 'eu nao sei'}
  ];

  acharItens(index: number, itemObject: any) {
    return itemObject.id;
  }

  filtro(){
    
  }

  constructor() { }

  ngOnInit() {
  }


}
