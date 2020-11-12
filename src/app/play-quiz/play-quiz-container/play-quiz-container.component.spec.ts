import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayQuizContainerComponent } from './play-quiz-container.component';

describe('PlayQuizContainerComponent', () => {
  let component: PlayQuizContainerComponent;
  let fixture: ComponentFixture<PlayQuizContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayQuizContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayQuizContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
