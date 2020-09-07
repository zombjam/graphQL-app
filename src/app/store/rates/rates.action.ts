import { createAction, props } from '@ngrx/store';
import { ExchangeRate } from 'app/middleware/graphql';

export const getRates = createAction('[rates] get rates');
export const getRatesComplete = createAction(
  '[rates] get rates complete',
  props<{ rates: ExchangeRate[]; loading: boolean; error: any }>()
);
