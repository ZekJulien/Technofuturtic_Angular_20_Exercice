import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoDirective } from './demo-directive';

describe('DemoDirective', () => {
  let component: DemoDirective;
  let fixture: ComponentFixture<DemoDirective>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoDirective]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoDirective);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
