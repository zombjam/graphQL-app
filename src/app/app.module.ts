import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';

import { NgrxStoreModule } from 'app/store/ngrx-store.module';
import { ExchangeratesComponent } from './exchangerates/exchangerates.component';

@NgModule({
  imports: [BrowserModule, GraphQLModule, HttpClientModule, NgrxStoreModule],
  providers: [],
  declarations: [AppComponent, ExchangeratesComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
