import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectDisconectComponent } from './connect-disconect.component';

describe('ConnectDisconectComponent', () => {
  let component: ConnectDisconectComponent;
  let fixture: ComponentFixture<ConnectDisconectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnectDisconectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectDisconectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
