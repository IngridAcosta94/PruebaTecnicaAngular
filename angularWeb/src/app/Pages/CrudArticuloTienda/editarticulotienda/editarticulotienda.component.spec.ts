import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarticulotiendaComponent } from './editarticulotienda.component';

describe('EditarticulotiendaComponent', () => {
  let component: EditarticulotiendaComponent;
  let fixture: ComponentFixture<EditarticulotiendaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarticulotiendaComponent]
    });
    fixture = TestBed.createComponent(EditarticulotiendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
