import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogVetComponent } from './log-vet.component';

describe('LogVetComponent', () => {
  let component: LogVetComponent;
  let fixture: ComponentFixture<LogVetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogVetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogVetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
