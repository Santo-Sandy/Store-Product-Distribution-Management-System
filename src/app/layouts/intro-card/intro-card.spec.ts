import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroCard } from './intro-card';

describe('IntroCard', () => {
  let component: IntroCard;
  let fixture: ComponentFixture<IntroCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntroCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntroCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
