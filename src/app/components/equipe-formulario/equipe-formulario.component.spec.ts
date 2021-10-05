import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipeFormularioComponent } from './equipe-formulario.component';

describe('EquipeFormularioComponent', () => {
  let component: EquipeFormularioComponent;
  let fixture: ComponentFixture<EquipeFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipeFormularioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipeFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
