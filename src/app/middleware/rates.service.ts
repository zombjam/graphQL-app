import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApolloQueryResult } from '@apollo/client/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { RatesGQL, RatesQuery } from './graphql';
import { ApiColumn, IsUseGraphQL } from './api.constant';
import { Rates } from 'app/models';

@Injectable({
  providedIn: 'root',
})
export class RatesService {
  constructor(private http: HttpClient, private GQL: RatesGQL) {}

  getRates(): Observable<Rates.RateModel> {
    if (IsUseGraphQL[ApiColumn.rates]) {
      return this.getRatesGQL();
    }
    return this.http.get<Rates.APIOutput>('/api/rates').pipe(map(result => ({ rates: result.data.rates ?? [] })));
  }

  private getRatesGQL(): Observable<Rates.RateModel> {
    return this.GQL.watch().valueChanges.pipe(
      map((result: ApolloQueryResult<RatesQuery>) => ({ rates: result.data?.rates ?? [], loading: result.loading, error: result.error }))
    );
  }
}
