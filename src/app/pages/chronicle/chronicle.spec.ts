import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chronicle } from './chronicle';

describe('Chronicle', () => {
  let component: Chronicle;
  let fixture: ComponentFixture<Chronicle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Chronicle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Chronicle);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
