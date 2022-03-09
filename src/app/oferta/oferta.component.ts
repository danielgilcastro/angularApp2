import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';


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
    let oferta = this.ofertasService.getOfertasPorId(this.route.snapshot.params['id'])
    oferta.then((r)=>{
      this.oferta = r.shift()
      console.log()
    })
   /* mehod subscribe
    this.route.params.subscribe((paramters:any)=>{})
    */

  }

}
