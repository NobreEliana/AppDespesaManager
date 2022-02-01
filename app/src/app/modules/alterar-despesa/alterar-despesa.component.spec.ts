import { CommonModule } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxCurrencyModule } from 'ngx-currency';
import { DespesaService } from 'src/app/core/services/despesa.service';
import { DespesaFormComponent } from 'src/app/shared/components/despesa-form/despesa-form.component';

import { AlterarDespesaComponent } from './alterar-despesa.component';

describe('AlterarDespesaComponent', () => {
  let component: AlterarDespesaComponent;
  let fixture: ComponentFixture<AlterarDespesaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlterarDespesaComponent, DespesaFormComponent ],
      imports: [CommonModule, ReactiveFormsModule, NgxCurrencyModule],
      providers: [DespesaService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlterarDespesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
