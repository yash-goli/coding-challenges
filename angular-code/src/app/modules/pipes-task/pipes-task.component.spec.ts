import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesTaskComponent } from './pipes-task.component';

describe('PipesTaskComponent', () => {
  let component: PipesTaskComponent;
  let fixture: ComponentFixture<PipesTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipesTaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipesTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
