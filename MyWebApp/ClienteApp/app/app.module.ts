import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ListaProduto } from './loja/listaProduto.component';
import { DataServices } from './servicos/dataServices';
import { Carrinho } from './loja/carrinho/carrinho.component';
import { Loja } from './loja/loja.component';
import { EfetivarCompra } from './loja/efetivarCompra/efetivarCompra.component';

let router = [
    { path: "", component: Loja },
    { path: "efetivarCompra", component: EfetivarCompra }
];

@NgModule({
  declarations: [
      AppComponent,
      ListaProduto,
      Carrinho,
      Loja,
      EfetivarCompra
  ],
  imports: [
      BrowserModule,
      HttpModule,
      RouterModule.forRoot(router, {
          useHash: true,
          enableTracing: false
      })
  ],
  providers: [DataServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
