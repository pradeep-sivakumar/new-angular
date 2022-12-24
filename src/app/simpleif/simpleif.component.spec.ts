import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleifComponent } from './simpleif.component';

describe('SimpleifComponent', () => {
  let component: SimpleifComponent;
  let fixture: ComponentFixture<SimpleifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleifComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
