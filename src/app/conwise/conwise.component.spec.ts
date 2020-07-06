import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConwiseComponent } from './conwise.component';

describe('ConwiseComponent', () => {
  let component: ConwiseComponent;
  let fixture: ComponentFixture<ConwiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConwiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConwiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
