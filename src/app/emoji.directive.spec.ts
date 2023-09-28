import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmojiDirective } from './emoji.directive';
@Component({
    template: `<div appEmoji>Test</div>`,
  })
class HostComponent {}
@NgModule({
    declarations: [HostComponent, EmojiDirective],
    exports: [HostComponent],
  })
class HostModule {}
describe('EmojiDirective', () => {
    let component: HostComponent;
    let element: HTMLElement;
    let fixture: ComponentFixture<HostComponent>;
  
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [CommonModule, HostModule],
        declarations:[EmojiDirective] // * we import the host module
      }).compileComponents();
  
      fixture = TestBed.createComponent(HostComponent);
      component = fixture.componentInstance;
      element = fixture.nativeElement;
  
      fixture.detectChanges(); // * so the directive gets appilied
    });
  
    it('should create a host instance', () => {
      expect(component).toBeTruthy();
    });
  
    it('should add emoji', () => {
      // * arrange
      const el = element.querySelector('div')?.textContent;
  
      // * assert
      expect(el).toEqual('Test😊'); // * we check if the directive worked correctly
    });
});