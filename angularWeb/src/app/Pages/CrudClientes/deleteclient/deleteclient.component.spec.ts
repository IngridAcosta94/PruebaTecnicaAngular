import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteclientComponent } from './deleteclient.component';

describe('DeleteclientComponent', () => {
  let component: DeleteclientComponent;
  let fixture: ComponentFixture<DeleteclientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteclientComponent]
    });
    fixture = TestBed.createComponent(DeleteclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
