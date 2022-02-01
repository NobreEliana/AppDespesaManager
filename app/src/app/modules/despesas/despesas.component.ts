import { Component, Input, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { DespesaService} from 'src/app/core/services/despesa.service';
import { faTrashAlt, faEdit, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Inject } from '@angular/core';
import { TypeDespesa } from '../../core/pipe/type-despesa';
import { Despesa, IDespesa } from 'src/app/shared/models/despesa';

@Component({
  selector: 'app-despesas',
  templateUrl: './despesas.component.html',
  styleUrls: ['./despesas.component.less']
})
export class DespesasComponent implements OnInit {
  faTrashAlt = faTrashAlt;
  faEdit = faEdit;
  faSearch = faSearch;
  listaDespesa: IDespesa[] = [];
  searchForm = new FormGroup({
    date: new FormControl(''),
    type: new FormControl(''),
    value: new FormControl(''),
    description: new FormControl(''),
  });
  

  constructor(@Inject('TYPE_SELECT') public tipoDespesas: any[], private despesaService: DespesaService) { }

  ngOnInit() {
    this.listarDespesas();
  }

  deleteDespesa(id: number) {
    let confirmacao = confirm("Você tem certeza que deseja remover a despesa com o Id:" + id + "?");

    if (!confirmacao)
      return;

    this.despesaService.deleteDespesa(id).then(result => {
      this.listarDespesas()
      alert(result.mensagem);
    });
  }

  listarDespesas() {
    this.despesaService.getDespesa().then(result => {
      if (result.status != 200)
        alert(result.mensagem);

      this.listaDespesa = result.data;
    });
  }

  filtrarDespesas() {
    this.despesaService.getDespesaByFilter(this.searchForm.value).then(result => {
      if (result.status != 200) {
        alert(result.mensagem);
      }
      this.listaDespesa = result.data;
    });
  }

  limparCampos(){
    this.searchForm.patchValue({
      date:"",
      type:"",
      value:"",
      description:"",
    });
  }
}
