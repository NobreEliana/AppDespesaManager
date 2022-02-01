import { Inject, Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name:"type_despesa"
})
export class TypeDespesa implements PipeTransform  {

    constructor( @Inject('TYPE_SELECT') private tipoDespesas:any[]){}

    transform(value: any) {
        return this.tipoDespesas.find((tipo)=> tipo.id==value).nome;
    }

}
