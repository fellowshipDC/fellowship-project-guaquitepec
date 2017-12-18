import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EconomiaSolComponent } from './economia-sol.component';

describe('EconomiaSolComponent', () => {
  let component: EconomiaSolComponent;
  let fixture: ComponentFixture<EconomiaSolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EconomiaSolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EconomiaSolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
