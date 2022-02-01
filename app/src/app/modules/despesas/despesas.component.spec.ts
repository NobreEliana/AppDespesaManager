import { CommonModule } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxCurrencyModule } from 'ngx-currency';
import { TypeSelect } from 'src/app/app.config';
import { TypeDespesa } from 'src/app/core/pipe/type-despesa';
import { DespesaService } from 'src/app/core/services/despesa.service';

import { DespesasComponent } from './despesas.component';

describe('DespesasComponent', () => {
  let component: DespesasComponent;
  let fixture: ComponentFixture<DespesasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DespesasComponent ],
      imports: [CommonModule, ReactiveFormsModule, NgxCurrencyModule, FontAwesomeModule],
      providers: [TypeDespesa, { provide:"TYPE_SELECT", useValue:TypeSelect}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DespesasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
