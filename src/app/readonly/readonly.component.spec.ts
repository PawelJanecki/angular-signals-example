import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadonlyComponent } from './readonly.component';

describe('ReadonlyComponent', () => {
  let component: ReadonlyComponent;
  let fixture: ComponentFixture<ReadonlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReadonlyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReadonlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
