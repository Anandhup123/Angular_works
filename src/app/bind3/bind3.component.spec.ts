import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bind3Component } from './bind3.component';

describe('Bind3Component', () => {
  let component: Bind3Component;
  let fixture: ComponentFixture<Bind3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bind3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bind3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
