import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatearticuloComponent } from './createarticulo.component';

describe('CreatearticuloComponent', () => {
  let component: CreatearticuloComponent;
  let fixture: ComponentFixture<CreatearticuloComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatearticuloComponent]
    });
    fixture = TestBed.createComponent(CreatearticuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
