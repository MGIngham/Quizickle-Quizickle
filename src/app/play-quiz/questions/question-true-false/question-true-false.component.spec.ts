import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionTrueFalseComponent } from './question-true-false.component';

describe('QuestionTrueFalseComponent', () => {
  let component: QuestionTrueFalseComponent;
  let fixture: ComponentFixture<QuestionTrueFalseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionTrueFalseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionTrueFalseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
