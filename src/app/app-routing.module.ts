import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'intro',
    loadChildren: () => import('./intro/intro.module').then( m => m.IntroPageModule)
  },
  {
    path: '',
    redirectTo: 'intro',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: 'teste',
    loadChildren: () => import('./teste/teste.module').then( m => m.TestePageModule)
  },
  {
    path: 'conquistas',
    loadChildren: () => import('./conquistas/conquistas.module').then( m => m.ConquistasPageModule)
  },
  {
    path: 'j-velha',
    loadChildren: () => import('./j-velha/j-velha.module').then( m => m.JVelhaPageModule)
  },
  {
    path: 'historias',
    loadChildren: () => import('./historias/historias.module').then( m => m.HistoriasPageModule)
  },
  {
    path: 'j-frutas',
    loadChildren: () => import('./j-frutas/j-frutas.module').then( m => m.JFrutasPageModule)
  },

  {
    path: 'tab1',
    loadChildren: () => import('./tab1/tab1.module').then( m => m.Tab1PageModule)
  },

  {
    path: 'dados-filme',
    loadChildren: () => import('./dados-filme/dados-filme.module').then( m => m.DadosFilmePageModule)
  },
  {
    path: 'j-significados',
    loadChildren: () => import('./j-significados/j-significados.module').then( m => m.JSignificadosPageModule)
  },
  {
    path: 'intro',
    loadChildren: () => import('./intro/intro.module').then( m => m.IntroPageModule)
  },

  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
