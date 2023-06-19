import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarticuloComponent } from 'src/app/Pages/CrudArticulos/editarticulo/editarticulo.component';

describe('EditarticuloComponent', () => {
  let component: EditarticuloComponent;
  let fixture: ComponentFixture<EditarticuloComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarticuloComponent]
    });
    fixture = TestBed.createComponent(EditarticuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
