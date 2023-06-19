import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatetiendaComponent } from './createtienda.component';

describe('CreatetiendaComponent', () => {
  let component: CreatetiendaComponent;
  let fixture: ComponentFixture<CreatetiendaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatetiendaComponent]
    });
    fixture = TestBed.createComponent(CreatetiendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
