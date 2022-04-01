import { Http, Response } from "@angular/http";
import { Injectable } from "@angular/core";
import { Oferta } from "./shared/oferta.model";
import { URL_API } from "./app.api";
import { HttpClient } from '@angular/common/http';

import { Observable } from "rxjs";
import { debounceTime, map, retry } from 'rxjs/operators';


@Injectable()
export class OfertasService {

    constructor(private http: Http, private httpN:HttpClient) { }
    //, private httpCliente:HttpClient

    // private urlApi = 'http://localhost:3000/ofertas'

    public getOfertas() {
        //return fetch('http://localhost:3000/ofertas').then(resp=>resp.json())
        return this.http.get(`${URL_API}`).toPromise().then((resposta: any) => resposta.json())
    }

    public getOfertasPorCategoria(categoria:string){
        return this.http.get(`${URL_API}?categoria=${categoria}`)
        .toPromise().then((resposta: any) => resposta.json())
    }

    public getOfertasPorId(id:string){
      return fetch(`${URL_API}?id=${id}`).then(resp=>resp.json())
     // return this.httpCliente.get(`${URL_API}?id=${id}`).toPromise()
     // .then((resposta: any) => resposta.json())
    }


    public getOfertasComoUsarPorId(id:string){
        return this.http.get(`http://localhost:3000/como-usar?id=${id}`).toPromise()
        .then((resp:any)=>resp.json())
    }

    public getOfertasOndeFicaPorId(id:string){
        return this.http.get(`http://localhost:3000/onde-fica?id=${id}`).toPromise()
        .then((resp:any)=>resp.json())
    }
    public getOfertasOndeFicaPorIdTeste(id:string){
        return this.http.get(`http://localhost:3000/onde-fica?id=${id}`)
    }

    public pesquisaOfertas(termo:string):Observable<any>{
        return this.http.get(`${URL_API}?descricao_oferta_like=${termo}`)
        .pipe(
            map((response:any)=>response.json())
        )
    }

    public buscaEnd(cep:string){
     //   return fetch(`https://viacep.com.br/ws/25926456/json/`).then(r=>r.json())
       return this.httpN.get(`https://viacep.com.br/ws/${cep}/json/`)
        .pipe(
            debounceTime(1000),
            map((resp:any)=>resp),
        )
        
    }




}