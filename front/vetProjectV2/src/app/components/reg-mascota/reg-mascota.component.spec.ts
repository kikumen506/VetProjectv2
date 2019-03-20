import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegMascotaComponent } from './reg-mascota.component';

describe('RegMascotaComponent', () => {
  let component: RegMascotaComponent;
  let fixture: ComponentFixture<RegMascotaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegMascotaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegMascotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
