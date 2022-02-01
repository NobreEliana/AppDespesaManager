import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxCurrencyModule } from 'ngx-currency';
import { TypeSelect } from 'src/app/app.config';

import { DespesaFormComponent } from './despesa-form.component';

describe('DespesaFormComponent', () => {
  let component: DespesaFormComponent;
  let fixture: ComponentFixture<DespesaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DespesaFormComponent ],
      imports: [CommonModule, ReactiveFormsModule, NgxCurrencyModule, HttpClientModule],
      providers: [{ provide:"TYPE_SELECT", useValue:TypeSelect}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DespesaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
