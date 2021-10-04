import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquipeComponentListComponent } from './components/equipe-component-list/equipe-component-list.component';
import { PalavraListComponent } from './components/palavra-list/palavra-list.component';

const routes: Routes = [
  {path:'', redirectTo:'palavras', pathMatch: 'full'},
  {path:'palavras', component:PalavraListComponent},
  {path:'equipes', component:EquipeComponentListComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
