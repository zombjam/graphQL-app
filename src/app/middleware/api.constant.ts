export const enum ApiColumn {
  rates = 'rates',
}

export const IsUseGraphQL: { [key in ApiColumn]: boolean } = {
  [ApiColumn.rates]: true,
};
