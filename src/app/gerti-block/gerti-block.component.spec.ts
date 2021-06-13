import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GertiBlockComponent } from './gerti-block.component';

describe('GertiBlockComponent', () => {
  let component: GertiBlockComponent;
  let fixture: ComponentFixture<GertiBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GertiBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GertiBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
