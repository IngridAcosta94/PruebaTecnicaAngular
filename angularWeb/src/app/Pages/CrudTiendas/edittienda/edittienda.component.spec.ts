import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdittiendaComponent } from './edittienda.component';

describe('EdittiendaComponent', () => {
  let component: EdittiendaComponent;
  let fixture: ComponentFixture<EdittiendaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EdittiendaComponent]
    });
    fixture = TestBed.createComponent(EdittiendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
