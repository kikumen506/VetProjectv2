import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegVetComponent } from './reg-vet.component';

describe('RegVetComponent', () => {
  let component: RegVetComponent;
  let fixture: ComponentFixture<RegVetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegVetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegVetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
