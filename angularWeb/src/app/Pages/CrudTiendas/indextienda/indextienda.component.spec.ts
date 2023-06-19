import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndextiendaComponent } from './indextienda.component';

describe('IndextiendaComponent', () => {
  let component: IndextiendaComponent;
  let fixture: ComponentFixture<IndextiendaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndextiendaComponent]
    });
    fixture = TestBed.createComponent(IndextiendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
