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
import { TabelaExamesComponent } from './components/tabela-exames/tabela-exames.component';
import { TabelaApontamentosComponent } from './components/tabela-apontamentos/tabela-apontamentos.component';
import { InserirApontamentosComponent } from './components/inserir-apontamentos/inserir-apontamentos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { CabecalhoComponent } from './components/cabecalho/cabecalho.component';
import { ThfPageDynamicSearchModule } from '@totvs/thf-templates';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TabelaExamesComponent,
    TabelaApontamentosComponent,
    InserirApontamentosComponent,
    LoginComponent,
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
