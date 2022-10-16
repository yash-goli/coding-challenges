import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepeaterTaskComponent } from './repeater-task.component';

describe('RepeaterTaskComponent', () => {
  let component: RepeaterTaskComponent;
  let fixture: ComponentFixture<RepeaterTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepeaterTaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepeaterTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
