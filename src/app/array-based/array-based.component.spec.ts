import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayBasedComponent } from './array-based.component';

describe('ArrayBasedComponent', () => {
  let component: ArrayBasedComponent;
  let fixture: ComponentFixture<ArrayBasedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrayBasedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArrayBasedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
