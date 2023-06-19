import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatearticulotiendaComponent } from './createarticulotienda.component';

describe('CreatearticulotiendaComponent', () => {
  let component: CreatearticulotiendaComponent;
  let fixture: ComponentFixture<CreatearticulotiendaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatearticulotiendaComponent]
    });
    fixture = TestBed.createComponent(CreatearticulotiendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
