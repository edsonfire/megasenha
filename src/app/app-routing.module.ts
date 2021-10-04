import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PalavraListComponent } from './components/palavra-list/palavra-list.component';

const routes: Routes = [
  {path:'', redirectTo:'palavras', pathMatch: 'full'},
  {path:'palavras', component:PalavraListComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
