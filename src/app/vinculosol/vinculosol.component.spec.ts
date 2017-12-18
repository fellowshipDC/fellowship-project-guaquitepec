import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VinculosolComponent } from './vinculosol.component';

describe('VinculosolComponent', () => {
  let component: VinculosolComponent;
  let fixture: ComponentFixture<VinculosolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VinculosolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VinculosolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
