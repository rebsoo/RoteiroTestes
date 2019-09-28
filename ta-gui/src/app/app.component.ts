import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nova-gui';

   aluno: Aluno = {nome: "Digite...", cpf: "Digite...", email: "Digite...", login: "Digite..."};
}

export class Aluno {
  nome: string;
  cpf: string;
  email: string;
  login: string;
}
