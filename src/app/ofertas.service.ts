import { Http } from "@angular/http";
import { Injectable } from "@angular/core";
import { Oferta } from "./shared/oferta.model";
import { URL_API } from "./app.api";

import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class OfertasService {

    constructor(private http: Http) { }
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

}