import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizBuilderContainerComponent } from './quiz-builder-container.component';

describe('QuizBuilderContainerComponent', () => {
  let component: QuizBuilderContainerComponent;
  let fixture: ComponentFixture<QuizBuilderContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizBuilderContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizBuilderContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
