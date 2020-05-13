import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidermoduleComponent } from './slidermodule.component';

describe('SlidermoduleComponent', () => {
  let component: SlidermoduleComponent;
  let fixture: ComponentFixture<SlidermoduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlidermoduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidermoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
