import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from 'environments/environment';
import { RatesModule } from './rates/rates.module';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot(
      {},
      {
        runtimeChecks: {
          strictStateImmutability: false,
          strictActionImmutability: false,
        },
      }
    ),
    EffectsModule.forRoot(),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      // name: `${versions.name}@${versions.version}-${versions.revision}`,
      // Restrict extension to log-only mode
      logOnly: environment.production,
    }),
    RatesModule,
  ],
})
export class NgrxStoreModule {}
