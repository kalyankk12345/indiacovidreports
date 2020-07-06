import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidnewsComponent } from './covidnews.component';

describe('CovidnewsComponent', () => {
  let component: CovidnewsComponent;
  let fixture: ComponentFixture<CovidnewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CovidnewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidnewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
