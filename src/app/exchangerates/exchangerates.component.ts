import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { getRates, selectRates, selectRatesError, selectRatesLoading } from 'app/store/rates/rates.module';

@Component({
  selector: 'app-exchangerates',
  templateUrl: './exchangerates.component.html',
  styleUrls: ['./exchangerates.component.scss'],
})
export class ExchangeratesComponent implements OnInit {
  rates$ = this.store.select(selectRates);

  loading$ = this.store.select(selectRatesLoading);
  errors$ = this.store.select(selectRatesError);

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(getRates());
  }
}
