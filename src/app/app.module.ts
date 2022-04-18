import { TabelaExameService } from './services/tabela-exame.service';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ThfModule } from '@totvs/thf-ui';
import { MenuComponent } from './components/menu/menu.component';
import { InserirApontamentosComponent } from './components/inserir-apontamentos/inserir-apontamentos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { ThfPageDynamicSearchModule } from '@totvs/thf-templates';
import { InserirFichaComponent } from './components/inserir-ficha/inserir-ficha.component';
import { CabecalhoComponent } from './components/menu/cabecalho/cabecalho.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    InserirApontamentosComponent,
    LoginComponent,
    InserirFichaComponent,
    CabecalhoComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    ThfPageDynamicSearchModule,
    RouterModule.forRoot([]),
    ThfModule,
    BrowserAnimationsModule
  ],
  providers: [TabelaExameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
