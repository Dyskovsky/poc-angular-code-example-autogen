import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AwesomeTestComponent } from './awesome-test.component';

describe('AwesomeTestComponent', () => {
  let component: AwesomeTestComponent;
  let fixture: ComponentFixture<AwesomeTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AwesomeTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwesomeTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
