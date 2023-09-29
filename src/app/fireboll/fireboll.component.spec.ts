import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirebollComponent } from './fireboll.component';

describe('FirebollComponent', () => {
  let component: FirebollComponent;
  let fixture: ComponentFixture<FirebollComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirebollComponent]
    });
    fixture = TestBed.createComponent(FirebollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
