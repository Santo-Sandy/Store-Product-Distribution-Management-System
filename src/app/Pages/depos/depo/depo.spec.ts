import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Depo } from './depo';

describe('Depo', () => {
  let component: Depo;
  let fixture: ComponentFixture<Depo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Depo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Depo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
