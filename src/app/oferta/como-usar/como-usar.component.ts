import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from 'src/app/ofertas.service';

@Component({
  selector: 'app-como-usar',
  templateUrl: './como-usar.component.html',
  styleUrls: ['./como-usar.component.css'],
  providers:[OfertasService]
})
export class ComoUsarComponent implements OnInit {

  constructor(private activetedRoute: ActivatedRoute, private ofertasService: OfertasService) { }

  public descricao:string = '';

  ngOnInit(): void {

   // 

   this.activetedRoute.parent?.params.pipe().subscribe(
     (res:any)=>{
      this.ofertasService.getOfertasComoUsarPorId(res.id)
      .then(r => {
        this.descricao = r[0].descricao
      })
     }
   )





  }

}
