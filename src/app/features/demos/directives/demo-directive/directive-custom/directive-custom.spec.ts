import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveCustom } from './directive-custom';

describe('DirectiveCustom', () => {
  let component: DirectiveCustom;
  let fixture: ComponentFixture<DirectiveCustom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectiveCustom]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectiveCustom);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
