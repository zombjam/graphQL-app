import { ExchangeRate } from 'app/middleware/graphql';

export interface APIOutput {
  data: {
    rates: ExchangeRate[];
  };
}

export interface RateModel {
  rates: ExchangeRate[];
  loading?: boolean;
  error?: any;
}
