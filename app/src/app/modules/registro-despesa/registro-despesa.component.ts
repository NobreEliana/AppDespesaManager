import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DespesaService } from 'src/app/core/services/despesa.service';
import { Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Despesa, IDespesa } from 'src/app/shared/models/despesa';
@Component({
  selector: 'app-registro-despesa',
  templateUrl: './registro-despesa.component.html',
  styleUrls: ['./registro-despesa.component.less']
})
export class RegistroDespesaComponent implements OnInit {

  private BASE_URL = 'http://localhost:5000';

  despesaForm = new FormGroup({
    date: new FormControl('', Validators.required),
    type: new FormControl('', Validators.required),
    value: new FormControl('', Validators.required),
    description: new FormControl(''),
  });

  constructor(@Inject('TYPE_SELECT') private tipoDespesas: any[], private http: HttpClient, private despesaService: DespesaService, private router: Router) { }

  ngOnInit() {
  }

  registrarDespesa(despesa: IDespesa){
    this.despesaService.insertDespesa(despesa).then(result => {
      alert(result.mensagem);
      this.router.navigate(['']);
    });
  }
  
}