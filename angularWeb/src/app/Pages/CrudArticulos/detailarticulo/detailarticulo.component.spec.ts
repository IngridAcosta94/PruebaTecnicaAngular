import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailarticuloComponent } from './detailarticulo.component';

describe('DetailarticuloComponent', () => {
  let component: DetailarticuloComponent;
  let fixture: ComponentFixture<DetailarticuloComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailarticuloComponent]
    });
    fixture = TestBed.createComponent(DetailarticuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
