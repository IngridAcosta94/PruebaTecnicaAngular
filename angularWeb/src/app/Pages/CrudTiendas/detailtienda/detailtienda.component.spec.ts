import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailtiendaComponent } from './detailtienda.component';

describe('DetailtiendaComponent', () => {
  let component: DetailtiendaComponent;
  let fixture: ComponentFixture<DetailtiendaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailtiendaComponent]
    });
    fixture = TestBed.createComponent(DetailtiendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
