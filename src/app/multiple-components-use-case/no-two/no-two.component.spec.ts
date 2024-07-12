import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoTwoComponent } from './no-two.component';

describe('NoTwoComponent', () => {
  let component: NoTwoComponent;
  let fixture: ComponentFixture<NoTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NoTwoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NoTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
