import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TowerExampleComponent } from './tower-example.component';

describe('TowerExampleComponent', () => {
  let component: TowerExampleComponent;
  let fixture: ComponentFixture<TowerExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TowerExampleComponent]
    });
    fixture = TestBed.createComponent(TowerExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
