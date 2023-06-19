import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailarticulotiendaComponent } from './detailarticulotienda.component';

describe('DetailarticulotiendaComponent', () => {
  let component: DetailarticulotiendaComponent;
  let fixture: ComponentFixture<DetailarticulotiendaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailarticulotiendaComponent]
    });
    fixture = TestBed.createComponent(DetailarticulotiendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
