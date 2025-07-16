import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormValidators } from './form-validators';

describe('FormValidators', () => {
  let component: FormValidators;
  let fixture: ComponentFixture<FormValidators>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormValidators]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormValidators);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
