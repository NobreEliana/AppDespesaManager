import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DespesaService } from './core/services/despesa.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DespesasComponent } from './modules/despesas/despesas.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RegistroDespesaComponent } from './modules/registro-despesa/registro-despesa.component';
import { ReactiveFormsModule} from '@angular/forms';
import { NgxCurrencyModule } from "ngx-currency";
import { AlterarDespesaComponent } from './modules/alterar-despesa/alterar-despesa.component';
import { TypeSelect } from './app.config';
import { TypeDespesa } from './core/pipe/type-despesa';
import { HeaderComponent } from './core/header/header/header.component';
import { FooterComponent } from './core/footer/footer/footer.component';
import { DespesaFormComponent } from './shared/components/despesa-form/despesa-form.component';;

@NgModule({
  declarations: [
    AppComponent,
    DespesasComponent,
    RegistroDespesaComponent,
    AlterarDespesaComponent,
    HeaderComponent,
    FooterComponent,
    DespesaFormComponent,
    TypeDespesa
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    NgxCurrencyModule

  ],
  providers: [
    DespesaService,
    TypeDespesa,
    { provide:"TYPE_SELECT", useValue:TypeSelect}
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
