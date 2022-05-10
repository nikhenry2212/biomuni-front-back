import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperaturaSoloComponent } from './temperatura-solo.component';

describe('TemperaturaSoloComponent', () => {
  let component: TemperaturaSoloComponent;
  let fixture: ComponentFixture<TemperaturaSoloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemperaturaSoloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemperaturaSoloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
