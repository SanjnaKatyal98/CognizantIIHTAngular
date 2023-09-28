import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateForms1Component } from './template-forms1.component';

describe('TemplateForms1Component', () => {
  let component: TemplateForms1Component;
  let fixture: ComponentFixture<TemplateForms1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateForms1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateForms1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
