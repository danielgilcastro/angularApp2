import { Http } from "@angular/http";
import { Injectable } from "@angular/core";
import { Oferta } from "./shared/oferta.model";


@Injectable()
export class OfertasService {

    constructor(private http: Http) { }
    //, private httpCliente:HttpClient

    public getOfertas() {
        //return fetch('http://localhost:3000/ofertas').then(resp=>resp.json())
        return this.http.get('http://localhost:3000/ofertas').toPromise().then((resposta: any) => resposta.json())
    }

    public getOfertasPorCategoria(categoria:string){
        return this.http.get(`http://localhost:3000/ofertas?categoria=${categoria}`)
        .toPromise().then((resposta: any) => resposta.json())
    }

    

}