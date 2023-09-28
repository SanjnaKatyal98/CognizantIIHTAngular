import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StarComponent } from './star.component';

describe('StarComponent', () => {
  let component: StarComponent;
  let element:HTMLElement
  let fixture: ComponentFixture<StarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarComponent ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(StarComponent);
    component = fixture.componentInstance;
    element=fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check whether @Output is correctly emitting event object of string type', () => {
    spyOn(component.ratingClicked,'emit');
    const div=fixture.nativeElement.querySelector('.crop');
    fixture.nativeElement.querySelector('#h2').value='a new value from child component';
    const inputText=fixture.nativeElement.querySelector('#h2').value;
    div.click();
    fixture.detectChanges();
    expect(component.ratingClicked.emit).toHaveBeenCalledWith(inputText);
  });
});
