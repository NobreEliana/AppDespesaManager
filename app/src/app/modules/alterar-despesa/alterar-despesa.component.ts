import { HttpClient } from '@angular/common/http';
import { Inject, Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DespesaService } from 'src/app/core/services/despesa.service';
import { Despesa, IDespesa } from 'src/app/shared/models/despesa';

@Component({
  selector: 'app-alterar-despesa',
  templateUrl: './alterar-despesa.component.html',
  styleUrls: ['./alterar-despesa.component.less']
})
export class AlterarDespesaComponent implements OnInit {

  public despesa:IDespesa;

  constructor(private despesaService: DespesaService, private route: ActivatedRoute, private router: Router) { }

  alterarDespesa(despesa: IDespesa) {
    this.despesaService.updateDespesa(despesa).then(result => {
      alert(result.mensagem);
      this.router.navigate(['']);

    })

  }

  ngOnInit() {
    this.despesaService.getDespesaById(this.route.snapshot.params.id).then(result => {
      this.despesa= result.data[0];
    });
  }
}