import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateusarioComponent } from './createusario.component';

describe('CreateusarioComponent', () => {
  let component: CreateusarioComponent;
  let fixture: ComponentFixture<CreateusarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateusarioComponent]
    });
    fixture = TestBed.createComponent(CreateusarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
