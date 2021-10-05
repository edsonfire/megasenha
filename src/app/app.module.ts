import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PalavraListComponent } from './components/palavra-list/palavra-list.component';
import { EquipeComponentListComponent } from './components/equipe-component-list/equipe-component-list.component';


@NgModule({
  declarations: [
    AppComponent,
    PalavraListComponent,
    EquipeComponentListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
