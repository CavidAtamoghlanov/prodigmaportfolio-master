import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EyeBallPageComponent } from './eye-ball-page.component';

describe('EyeBallPageComponent', () => {
  let component: EyeBallPageComponent;
  let fixture: ComponentFixture<EyeBallPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EyeBallPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EyeBallPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
