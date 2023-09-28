import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RepeatDataPipe } from '../repeat-data.pipe';
import { TransformDataPipe } from '../transform-data.pipe';

import { PipesComponent } from './pipes.component';

describe('PipesComponent', () => {
  let component: PipesComponent;
  let fixture: ComponentFixture<PipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipesComponent,RepeatDataPipe,TransformDataPipe ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
