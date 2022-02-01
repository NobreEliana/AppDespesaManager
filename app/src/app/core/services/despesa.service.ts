import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { promise } from 'protractor';
import { IDespesa } from 'src/app/shared/models/despesa';
import { Retorno } from 'src/app/shared/models/retorno';
import { environment } from 'src/environments/environment';

@Injectable()
export class DespesaService {

  private BASE_URL= environment.api_url;

  constructor(private http:HttpClient) { }

  async getDespesa():Promise<Retorno>{

    const promise= new Promise<Retorno>((resolve,reject)=>{
      this.http.get<Retorno>(this.BASE_URL + "/despesas")
      .toPromise().then((response)=>{
          response.data.map((despesa)=>{
          despesa.date= new Date(despesa.date).toLocaleDateString()
          });
        resolve(response)
      },(error)=>reject(error));
    });
    return promise;
  }

  async getDespesaById(id:number):Promise<Retorno>{

    const promise= new Promise<Retorno>((resolve,reject)=>{
      this.http.get<Retorno>(this.BASE_URL + "/despesas/"+id)
      .toPromise().then((response)=>{
        return resolve(response);
      },(error)=>reject(error));
    });
    return promise;
  }

  async deleteDespesa(id:number):Promise<Retorno>{

    const promise= new Promise<Retorno>((resolve,reject)=>{
      this.http.delete<Retorno>(this.BASE_URL + "/despesas/"+id)
      .toPromise().then((response)=>resolve(response),(error)=>reject(error));
    });
    return promise;
  }

  async updateDespesa(despesa:IDespesa):Promise<Retorno>{
    const promise= new Promise<Retorno>((resolve,reject)=>{
      this.http.patch<Retorno>(this.BASE_URL + "/despesas/",despesa)
      .toPromise().then((response)=>resolve(response),(error)=>reject(error));
    });
    return promise;
  }

  async insertDespesa(despesa:IDespesa):Promise<Retorno>{

    const promise= new Promise<Retorno>((resolve,reject)=>{
      this.http.post<Retorno>(this.BASE_URL + "/despesas/",despesa)
      .toPromise().then((response)=>resolve(response),(error)=>reject(error));
    });
    return promise;
  }

  async getDespesaByFilter(despesa:IDespesa):Promise<Retorno>{
    let query= "?";
    if(despesa.date!=''){
      query+= query.length>1?"&":"";
      query+="date="+despesa.date;
    }
    if(despesa.type!=''){
      query+= query.length>1?"&":"";
      query+="type="+despesa.type;
    }
    if(despesa.value.toString()!=''){
      query+= query.length>1?"&":"";
      query+="value="+despesa.value;
    }
    if(despesa.description!=''){
      query+= query.length>1?"&":"";
      query+="description="+despesa.description;
    }

    const promise= new Promise<Retorno>((resolve,reject)=>{
      this.http.get<Retorno>(this.BASE_URL + "/despesas"+query)
      .toPromise().then((response)=>resolve(response),(error)=>reject(error));
    });
    return promise;
  }

}





