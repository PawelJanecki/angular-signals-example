import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayObjectComponent } from './array-object.component';

describe('ArrayObjectComponent', () => {
  let component: ArrayObjectComponent;
  let fixture: ComponentFixture<ArrayObjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArrayObjectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArrayObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
