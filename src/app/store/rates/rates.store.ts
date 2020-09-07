import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State, ratesFeatureKey } from './rates.reducer';

export const selectRatesState = createFeatureSelector<State>(ratesFeatureKey);

export const selectRates = createSelector(selectRatesState, state => state.rates);
export const selectRatesLoading = createSelector(selectRatesState, state => state.loading);
export const selectRatesError = createSelector(selectRatesState, state => state.error);
