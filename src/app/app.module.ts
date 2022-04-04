import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ThfModule } from '@totvs/thf-ui';
import { MenuComponent } from './components/menu/menu.component';
import { FilterComponent } from './components/filter/filter.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FilterComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    RouterModule.forRoot([]),
    ThfModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
