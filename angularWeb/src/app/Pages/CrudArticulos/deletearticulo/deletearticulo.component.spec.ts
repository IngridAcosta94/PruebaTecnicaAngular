import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletearticuloComponent } from './deletearticulo.component';

describe('DeletearticuloComponent', () => {
  let component: DeletearticuloComponent;
  let fixture: ComponentFixture<DeletearticuloComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeletearticuloComponent]
    });
    fixture = TestBed.createComponent(DeletearticuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
