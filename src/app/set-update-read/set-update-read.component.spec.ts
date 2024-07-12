import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetUpdateReadComponent } from './set-update-read.component';

describe('SetUpdateReadComponent', () => {
  let component: SetUpdateReadComponent;
  let fixture: ComponentFixture<SetUpdateReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SetUpdateReadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SetUpdateReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
