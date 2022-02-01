import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Despesa, IDespesa } from '../../models/despesa';

@Component({
  selector: 'app-despesa-form',
  templateUrl: './despesa-form.component.html',
  styleUrls: ['./despesa-form.component.less']
})
export class DespesaFormComponent implements OnInit {
  
  despesaForm = new FormGroup({
    id: new FormControl({value:'', disabled:true}),
    date: new FormControl('', Validators.required),
    type: new FormControl('', Validators.required),
    value: new FormControl('', Validators.required),
    description: new FormControl(''),
  });
  @Input() _despesa:IDespesa;
  @Input() parent:string;
  @Output() despesa_emiter=new EventEmitter();
    title:String;

  constructor(@Inject('TYPE_SELECT') public tipoDespesas: any[], private http: HttpClient) { 
  }

  ngOnInit() {
    if(this.parent=="alterar"){
      this.title="Preencha os campos que deseja alterar:"  
      this.fillForm();
    }
    if(this.parent=="registrar")
      this.title="Adicione sua despesa:"
  }

  private fillForm() {
    setTimeout(() => {
      this.despesaForm.patchValue({
        id: this._despesa.id,
        date: this._despesa.date.split('T', 1),
        type: this._despesa.type,
        value: this._despesa.value,
        description: this._despesa.description,
      });
    }, 500);
  }

  onSubmit() {
    let despesa = new Despesa(this.despesaForm.controls.id.value, this.despesaForm.value.date, this.despesaForm.value.type, this.despesaForm.value.value, this.despesaForm.value.description);
    this.despesa_emiter.emit(despesa);
  }

  
}
