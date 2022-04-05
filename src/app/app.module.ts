import { TabelaExameService } from './services/tabela-exame.service';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ThfModule } from '@totvs/thf-ui';
import { MenuComponent } from './components/menu/menu.component';
import { FilterComponent } from './components/filter/filter.component';
import { TabelaExamesComponent } from './components/tabela-exames/tabela-exames.component';
import { TabelaApontamentosComponent } from './components/tabela-apontamentos/tabela-apontamentos.component';
import { InserirApontamentosComponent } from './components/inserir-apontamentos/inserir-apontamentos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FilterComponent,
    TabelaExamesComponent,
    TabelaApontamentosComponent,
    InserirApontamentosComponent,
    LoginComponent
  ],
  imports: [
    AppRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    RouterModule.forRoot([]),
    ThfModule,
    BrowserAnimationsModule
  ],
  providers: [TabelaExameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
