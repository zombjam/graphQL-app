import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { RatesService } from 'app/middleware';
import * as actions from './rates.action';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class RatesEffects {
  constructor(private actions$: Actions, private service: RatesService) {}

  getRates$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.getRates),
      switchMap(() =>
        this.service.getRates().pipe(
          map(result => actions.getRatesComplete({ rates: result.rates, loading: result.loading, error: result.error })),
          catchError((error: HttpErrorResponse) =>
            of(actions.getRatesComplete({ rates: [], loading: false, error: error.message ?? error }))
          )
        )
      )
    )
  );
}
