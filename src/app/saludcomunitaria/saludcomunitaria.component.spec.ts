import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaludcomunitariaComponent } from './saludcomunitaria.component';

describe('SaludcomunitariaComponent', () => {
  let component: SaludcomunitariaComponent;
  let fixture: ComponentFixture<SaludcomunitariaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaludcomunitariaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaludcomunitariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
