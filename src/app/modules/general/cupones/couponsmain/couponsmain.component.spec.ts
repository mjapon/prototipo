import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouponsmainComponent } from './couponsmain.component';

describe('CouponsmainComponent', () => {
  let component: CouponsmainComponent;
  let fixture: ComponentFixture<CouponsmainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CouponsmainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CouponsmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
