import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type Query = {
  __typename?: 'Query';
  rates?: Maybe<Array<Maybe<ExchangeRate>>>;
};

export type QueryRatesArgs = {
  currency: Scalars['String'];
};

export type ExchangeRate = {
  __typename?: 'ExchangeRate';
  currency?: Maybe<Scalars['String']>;
  rate?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE',
}

export type RatesQueryVariables = Exact<{
  currency: Scalars['String'];
}>;

export type RatesQuery = { __typename?: 'Query' } & {
  rates?: Maybe<Array<Maybe<{ __typename?: 'ExchangeRate' } & Pick<ExchangeRate, 'currency' | 'rate'>>>>;
};

export const RatesDocument = gql`
  query Rates($currency: String!) {
    rates(currency: $currency) {
      currency
      rate
    }
  }
`;

@Injectable({
  providedIn: 'root',
})
export class RatesGQL extends Apollo.Query<RatesQuery, RatesQueryVariables> {
  document = RatesDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
