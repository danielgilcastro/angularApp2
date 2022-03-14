import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';
import { interval } from 'rxjs';



@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers:[OfertasService]
})
export class OfertaComponent implements OnInit {

  constructor
    (
    private route: ActivatedRoute,
    private ofertasService:OfertasService
    ) { }

  public oferta : Oferta |any


  ngOnInit(): void {
     this.ofertasService.getOfertasPorId(this.route.snapshot.params['id'])
     .then((r)=>{
       this.oferta = r.shift()
       console.log()
     })

/*
    this.route.params.subscribe(
      (p:any)=>{console.log(p.id),
        (erro:any)=>{console.log(erro)},
        ()=>{console.log('processamento foi concluido')}
    })
*/

   /* mehod subscribe
    this.route.params.subscribe((paramters:any)=>{})
    */
    let inter = interval(2000);
    inter.subscribe((int)=>{
     console.log(int)
   })

  }

}
