import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectarticuloComponent } from './selectarticulo.component';

describe('SelectarticuloComponent', () => {
  let component: SelectarticuloComponent;
  let fixture: ComponentFixture<SelectarticuloComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectarticuloComponent]
    });
    fixture = TestBed.createComponent(SelectarticuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
