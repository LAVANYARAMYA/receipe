import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceipeCardComponent } from './receipe-card.component';

describe('ReceipeCardComponent', () => {
  let component: ReceipeCardComponent;
  let fixture: ComponentFixture<ReceipeCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReceipeCardComponent]
    });
    fixture = TestBed.createComponent(ReceipeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
