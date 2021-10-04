import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipeComponentListComponent } from './equipe-component-list.component';

describe('EquipeComponentListComponent', () => {
  let component: EquipeComponentListComponent;
  let fixture: ComponentFixture<EquipeComponentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipeComponentListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipeComponentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
