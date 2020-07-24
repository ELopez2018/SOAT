import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarPlacaComponent } from './consultar-placa.component';

describe('ConsultarPlacaComponent', () => {
  let component: ConsultarPlacaComponent;
  let fixture: ComponentFixture<ConsultarPlacaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultarPlacaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarPlacaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
