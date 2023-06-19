import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignararticulotiendaComponent } from './asignararticulotienda.component';

describe('AsignararticulotiendaComponent', () => {
  let component: AsignararticulotiendaComponent;
  let fixture: ComponentFixture<AsignararticulotiendaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsignararticulotiendaComponent]
    });
    fixture = TestBed.createComponent(AsignararticulotiendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
