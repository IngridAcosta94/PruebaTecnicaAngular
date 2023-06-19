import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexarticuloComponent } from './indexarticulo.component';

describe('IndexarticuloComponent', () => {
  let component: IndexarticuloComponent;
  let fixture: ComponentFixture<IndexarticuloComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndexarticuloComponent]
    });
    fixture = TestBed.createComponent(IndexarticuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
