import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlterarDespesaComponent } from './modules/alterar-despesa/alterar-despesa.component';
import { DespesasComponent } from './modules/despesas/despesas.component';
import { RegistroDespesaComponent } from './modules/registro-despesa/registro-despesa.component';


const routes: Routes = [
  {path:"", component:DespesasComponent},
  {path:"registro", component:RegistroDespesaComponent},
  {path:"alterar/:id", component:AlterarDespesaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
