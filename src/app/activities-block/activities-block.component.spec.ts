import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitiesBlockComponent } from './activities-block.component';

describe('ActivitiesBlockComponent', () => {
  let component: ActivitiesBlockComponent;
  let fixture: ComponentFixture<ActivitiesBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivitiesBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivitiesBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
