import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-teste',
  templateUrl: './teste.page.html',
  styleUrls: ['./teste.page.scss'],
})
export class TestePage implements OnInit {


  constructor() { }

  logs: string[] = [];

  pushLog(msg) {
    this.logs.unshift(msg);
  }

  handleChange(e) {
    this.pushLog('a: ' + e.detail.value);
  }
  
  ngOnInit() {
 
  }
  
}


