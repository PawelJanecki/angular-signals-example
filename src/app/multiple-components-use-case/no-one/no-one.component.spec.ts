import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoOneComponent } from './no-one.component';

describe('NoOneComponent', () => {
  let component: NoOneComponent;
  let fixture: ComponentFixture<NoOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NoOneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NoOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
