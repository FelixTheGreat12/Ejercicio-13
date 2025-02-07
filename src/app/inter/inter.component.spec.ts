import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterComponent } from './inter.component';

describe('InterComponent', () => {
  let component: InterComponent;
  let fixture: ComponentFixture<InterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
