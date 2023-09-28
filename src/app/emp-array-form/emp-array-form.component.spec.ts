import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpArrayFormComponent } from './emp-array-form.component';

describe('EmpArrayFormComponent', () => {
  let component: EmpArrayFormComponent;
  let fixture: ComponentFixture<EmpArrayFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpArrayFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpArrayFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
