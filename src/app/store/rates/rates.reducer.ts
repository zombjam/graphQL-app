import { ExchangeRate } from 'app/middleware/graphql';
import { Action, createReducer, on } from '@ngrx/store';

import * as RatesActions from './rates.action';

export interface State {
  rates: ExchangeRate[];
  loading: boolean;
  error: any;
}

export const RATES_INITIAL_STATE: State = {
  rates: [],
  loading: null,
  error: null,
};

export const ratesFeatureKey = 'rates';

const rateReducer = createReducer(
  RATES_INITIAL_STATE,
  on(RatesActions.getRates, state => ({ ...state, rates: [] } as State)),
  on(RatesActions.getRatesComplete, (state, { rates, loading, error }) => ({ ...state, rates, loading, error }))
);

export function reducer(state: State | undefined, action: Action) {
  return rateReducer(state, action);
}
