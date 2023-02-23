import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseresultsComponent } from './caseresults.component';

describe('CaseresultsComponent', () => {
  let component: CaseresultsComponent;
  let fixture: ComponentFixture<CaseresultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaseresultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseresultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
