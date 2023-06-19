import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexarticulotiendaComponent } from './indexarticulotienda.component';

describe('IndexarticulotiendaComponent', () => {
  let component: IndexarticulotiendaComponent;
  let fixture: ComponentFixture<IndexarticulotiendaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndexarticulotiendaComponent]
    });
    fixture = TestBed.createComponent(IndexarticulotiendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
