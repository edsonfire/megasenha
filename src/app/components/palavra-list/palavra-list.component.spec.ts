import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PalavraListComponent } from './palavra-list.component';

describe('PalavraListComponent', () => {
  let component: PalavraListComponent;
  let fixture: ComponentFixture<PalavraListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PalavraListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PalavraListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
