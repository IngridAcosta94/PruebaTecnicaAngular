import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticulosdetiendaComponent } from './articulosdetienda.component';

describe('ArticulosdetiendaComponent', () => {
  let component: ArticulosdetiendaComponent;
  let fixture: ComponentFixture<ArticulosdetiendaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArticulosdetiendaComponent]
    });
    fixture = TestBed.createComponent(ArticulosdetiendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
