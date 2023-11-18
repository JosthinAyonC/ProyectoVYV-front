import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaHabitacionComponent } from './nueva-habitacion.component';

describe('NuevaHabitacionComponent', () => {
  let component: NuevaHabitacionComponent;
  let fixture: ComponentFixture<NuevaHabitacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NuevaHabitacionComponent]
    });
    fixture = TestBed.createComponent(NuevaHabitacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
