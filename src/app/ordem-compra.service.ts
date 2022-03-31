import { Injectable } from "@angular/core"
import { HttpClient } from "@angular/common/http"
import { Pedido } from "./shared/pedido.model"
import { Observable } from "rxjs"
import { URL_API } from "./app.api"


@Injectable()
export class OrdemCompraService {

    constructor(private http: HttpClient) { }

    /*
    public efetivarCompra(pedido: Pedido): Observable<any> {
        let header: Headers = new Headers()
        header.append('Content-type','application/json')
        return this.http.post(` http://localhost:3000/pedidos`, JSON.stringify(pedido),new RequestOptions({ headers:header }))
        .pipe(
            map(r=>console.log(r))
        )
    }
    */
    public efetivarCompra(pedido: Pedido): Observable<any> {
        let headers = {"content-type":"application/json"}
        return this.http.post('http://localhost:3000/pedidos',JSON.stringify(pedido),{'headers':headers})
    }

    


}