import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnemyExampleComponent } from './enemy-example.component';

describe('EnemyExampleComponent', () => {
  let component: EnemyExampleComponent;
  let fixture: ComponentFixture<EnemyExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnemyExampleComponent]
    });
    fixture = TestBed.createComponent(EnemyExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
