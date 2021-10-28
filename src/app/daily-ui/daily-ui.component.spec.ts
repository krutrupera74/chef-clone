import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyUIComponent } from './daily-ui.component';

describe('DailyUIComponent', () => {
  let component: DailyUIComponent;
  let fixture: ComponentFixture<DailyUIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyUIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
