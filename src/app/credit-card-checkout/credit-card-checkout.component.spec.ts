import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditCardCheckoutComponent } from './credit-card-checkout.component';

describe('CreditCardCheckoutComponent', () => {
  let component: CreditCardCheckoutComponent;
  let fixture: ComponentFixture<CreditCardCheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditCardCheckoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditCardCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
