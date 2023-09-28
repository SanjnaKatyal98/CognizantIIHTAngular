import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { WelcomeComponent } from './welcome.component';

describe('WelcomeComponent', () => {
  let component: WelcomeComponent;
  let fixture: ComponentFixture<WelcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display n as 928', () => {
    component.n=928;
    fixture.detectChanges();
    const rootElem:DebugElement=fixture.debugElement;
    const h3=rootElem.query(By.css('#mssg'));
    const h3Elem:HTMLElement=h3.nativeElement;
    expect(h3Elem.textContent).toContain('928');
  });
});
