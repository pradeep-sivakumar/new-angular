import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StringBasedComponent } from './string-based.component';

describe('StringBasedComponent', () => {
  let component: StringBasedComponent;
  let fixture: ComponentFixture<StringBasedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StringBasedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StringBasedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
