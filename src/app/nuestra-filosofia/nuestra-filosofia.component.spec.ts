import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuestraFilosofiaComponent } from './nuestra-filosofia.component';

describe('NuestraFilosofiaComponent', () => {
  let component: NuestraFilosofiaComponent;
  let fixture: ComponentFixture<NuestraFilosofiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuestraFilosofiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuestraFilosofiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
