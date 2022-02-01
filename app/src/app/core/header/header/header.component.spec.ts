import { CommonModule } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxCurrencyModule } from 'ngx-currency';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { TypeSelect } from 'src/app/app.config';
import { AlterarDespesaComponent } from 'src/app/modules/alterar-despesa/alterar-despesa.component';
import { DespesasComponent } from 'src/app/modules/despesas/despesas.component';
import { RegistroDespesaComponent } from 'src/app/modules/registro-despesa/registro-despesa.component';
import { TypeDespesa } from '../../pipe/type-despesa';
import { DespesaService } from '../../services/despesa.service';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent],
      imports: [FontAwesomeModule]    
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
