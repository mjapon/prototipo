import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { KFieldsetComponent } from './k-fieldset.component';
import { KCommonModule } from '../../k-common/k-common.module';

describe('KFieldsetComponent', () => {
  let component: KFieldsetComponent;
  let fixture: ComponentFixture<KFieldsetComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [KFieldsetComponent],
      imports: [KCommonModule, BrowserAnimationsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KFieldsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
