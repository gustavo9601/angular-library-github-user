import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioColorComponent } from './usuario-color.component';

describe('UsuarioColorComponent', () => {
  let component: UsuarioColorComponent;
  let fixture: ComponentFixture<UsuarioColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuarioColorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
