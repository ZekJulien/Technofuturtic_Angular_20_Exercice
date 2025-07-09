import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExoBinding } from './binding';

describe('Binding', () => {
  let component: ExoBinding;
  let fixture: ComponentFixture<ExoBinding>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExoBinding]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExoBinding);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
