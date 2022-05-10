import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleaseDronesComponent } from './release-drones.component';

describe('ReleaseDronesComponent', () => {
  let component: ReleaseDronesComponent;
  let fixture: ComponentFixture<ReleaseDronesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReleaseDronesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReleaseDronesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
