import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelteusuarioComponent } from './delteusuario.component';

describe('DelteusuarioComponent', () => {
  let component: DelteusuarioComponent;
  let fixture: ComponentFixture<DelteusuarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DelteusuarioComponent]
    });
    fixture = TestBed.createComponent(DelteusuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
