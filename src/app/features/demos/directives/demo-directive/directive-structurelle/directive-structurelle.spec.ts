import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveStructurelle } from './directive-structurelle';

describe('DirectiveStructurelle', () => {
  let component: DirectiveStructurelle;
  let fixture: ComponentFixture<DirectiveStructurelle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectiveStructurelle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectiveStructurelle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
