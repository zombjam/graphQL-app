import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import * as fromRates from './rates.reducer';
import { EffectsModule } from '@ngrx/effects';

export * from './rates.action';
export * from './rates.store';
export { RATES_INITIAL_STATE } from './rates.reducer';

import { RatesEffects } from './rates.effect';

@NgModule({
  declarations: [],
  imports: [StoreModule.forFeature(fromRates.ratesFeatureKey, fromRates.reducer), EffectsModule.forFeature([RatesEffects])],
})
export class RatesModule {}
