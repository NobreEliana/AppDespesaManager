import { Component, OnInit } from '@angular/core';
import { DespesaService } from './core/services/despesa.service';
import { IDespesa } from './shared/models/despesa';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'orcamento-pessoal-app';
  tipoDespesas:any[]=[
    {nome:"Alimentação", id:0},
    {nome:"Saúde", id:1},
    {nome:"Lazer", id:2},
    {nome:"Educacao", id:3},
    {nome:"SuperMercado", id:4},
    {nome:"Outros", id:5}
  ];
  constructor(private despesaService:DespesaService){


  }
  ngOnInit(): void {
   
  }


}

