import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlatlistComponent } from './flatlist.component';

describe('FlatlistComponent', () => {
  let component: FlatlistComponent;
  let fixture: ComponentFixture<FlatlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlatlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlatlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
