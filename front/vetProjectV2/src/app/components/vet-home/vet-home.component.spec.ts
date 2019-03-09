import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VetHomeComponent } from './vet-home.component';

describe('VetHomeComponent', () => {
  let component: VetHomeComponent;
  let fixture: ComponentFixture<VetHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VetHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VetHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
