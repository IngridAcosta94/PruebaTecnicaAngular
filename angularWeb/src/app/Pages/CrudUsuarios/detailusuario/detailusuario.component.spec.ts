import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailusuarioComponent } from './detailusuario.component';

describe('DetailusuarioComponent', () => {
  let component: DetailusuarioComponent;
  let fixture: ComponentFixture<DetailusuarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailusuarioComponent]
    });
    fixture = TestBed.createComponent(DetailusuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
