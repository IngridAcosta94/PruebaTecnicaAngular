import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexclientearticuloComponent } from './indexclientearticulo.component';

describe('IndexclientearticuloComponent', () => {
  let component: IndexclientearticuloComponent;
  let fixture: ComponentFixture<IndexclientearticuloComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndexclientearticuloComponent]
    });
    fixture = TestBed.createComponent(IndexclientearticuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
