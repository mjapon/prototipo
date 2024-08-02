import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgcomparatorComponent } from './imgcomparator.component';

describe('ImgcomparatorComponent', () => {
  let component: ImgcomparatorComponent;
  let fixture: ComponentFixture<ImgcomparatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgcomparatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImgcomparatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
