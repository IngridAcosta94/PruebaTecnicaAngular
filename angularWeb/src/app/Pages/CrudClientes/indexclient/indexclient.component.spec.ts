import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexclientComponent } from './indexclient.component';

describe('IndexclientComponent', () => {
  let component: IndexclientComponent;
  let fixture: ComponentFixture<IndexclientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndexclientComponent]
    });
    fixture = TestBed.createComponent(IndexclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
