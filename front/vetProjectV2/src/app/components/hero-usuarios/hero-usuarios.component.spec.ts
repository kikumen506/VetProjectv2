import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroUsuariosComponent } from './hero-usuarios.component';

describe('HeroUsuariosComponent', () => {
  let component: HeroUsuariosComponent;
  let fixture: ComponentFixture<HeroUsuariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroUsuariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
