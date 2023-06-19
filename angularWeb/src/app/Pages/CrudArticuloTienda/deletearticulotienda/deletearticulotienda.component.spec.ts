import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletearticulotiendaComponent } from './deletearticulotienda.component';

describe('DeletearticulotiendaComponent', () => {
  let component: DeletearticulotiendaComponent;
  let fixture: ComponentFixture<DeletearticulotiendaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeletearticulotiendaComponent]
    });
    fixture = TestBed.createComponent(DeletearticulotiendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
