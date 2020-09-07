import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { RATES_INITIAL_STATE } from 'app/store/rates/rates.module';
import { ExchangeratesComponent } from './exchangerates.component';

describe('ExchangeratesComponent', () => {
  let component: ExchangeratesComponent;
  let fixture: ComponentFixture<ExchangeratesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ExchangeratesComponent],
      providers: [provideMockStore({ initialState: RATES_INITIAL_STATE })],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangeratesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
