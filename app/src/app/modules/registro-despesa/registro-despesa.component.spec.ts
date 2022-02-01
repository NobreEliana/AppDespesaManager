import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgxCurrencyModule } from 'ngx-currency';
import { TypeSelect } from 'src/app/app.config';
import { DespesaService } from 'src/app/core/services/despesa.service';
import { DespesaFormComponent } from 'src/app/shared/components/despesa-form/despesa-form.component';

import { RegistroDespesaComponent } from './registro-despesa.component';

describe('RegistroDespesaComponent', () => {
  let component: RegistroDespesaComponent;
  let fixture: ComponentFixture<RegistroDespesaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroDespesaComponent, DespesaFormComponent ],
      imports: [CommonModule, ReactiveFormsModule, NgxCurrencyModule, HttpClientModule, RouterModule],
      providers: [DespesaService, { provide:"TYPE_SELECT", useValue:TypeSelect}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroDespesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
