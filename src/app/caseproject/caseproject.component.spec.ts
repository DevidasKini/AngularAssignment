import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseprojectComponent } from './caseproject.component';

describe('CaseprojectComponent', () => {
  let component: CaseprojectComponent;
  let fixture: ComponentFixture<CaseprojectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaseprojectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
