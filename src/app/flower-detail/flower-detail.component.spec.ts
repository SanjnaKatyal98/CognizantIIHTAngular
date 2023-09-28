import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowerDetailComponent } from './flower-detail.component';

describe('FlowerDetailComponent', () => {
  let component: FlowerDetailComponent;
  let fixture: ComponentFixture<FlowerDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlowerDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlowerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
