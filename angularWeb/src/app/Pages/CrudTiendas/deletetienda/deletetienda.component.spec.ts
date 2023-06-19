import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletetiendaComponent } from './deletetienda.component';

describe('DeletetiendaComponent', () => {
  let component: DeletetiendaComponent;
  let fixture: ComponentFixture<DeletetiendaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeletetiendaComponent]
    });
    fixture = TestBed.createComponent(DeletetiendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
