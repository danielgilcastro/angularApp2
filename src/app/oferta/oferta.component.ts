import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, Observer } from 'rxjs';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';


@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers:[OfertasService]
})
export class OfertaComponent implements OnInit {

  constructor(private route: ActivatedRoute,private ofertasService:OfertasService) { }

  public oferta : Oferta |any

  ngOnInit(): void {

    this.route.params.subscribe((r:any)=>{
      this.ofertasService.getOfertasPorId(r.id)
      .then((r)=>{
        this.oferta = r.shift()
      })
        
      }
    )

     /*
     Observable.create((observer:Observer<any>)=>{
      observer.next('xxx')
      
      observer.next('bbb')
      observer.complete()
      observer.next('ccc')
      observer.error('errou meu chapa')

     }).subscribe(
       (res:any)=>{console.log(res)},
       (res:any)=>{console.log(res)}
       
       )
----------
    this.route.params.subscribe(
      (p:any)=>{console.log(p.id),
        (erro:any)=>{console.log(erro)},
        ()=>{console.log('processamento foi concluido')}
    })
*/



   /* mehod subscribe
    this.route.params.subscribe(
      (resp:any)=>{}
      (erro:any)=>{}
      (complete:any)=>{}
      )
    */

  }

}
