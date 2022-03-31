import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from 'src/app/ofertas.service';

@Component({
  selector: 'app-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.css'],
  providers: [OfertasService]
})
export class OndeFicaComponent implements OnInit {

  constructor(private activatedeRoute:ActivatedRoute, private ofertasService:OfertasService) { }

  public descricao:string ='';

  
  ngOnInit(): void {

    this.activatedeRoute.parent?.params.pipe().subscribe(
      (res:any)=>{
        this.ofertasService.getOfertasOndeFicaPorId(res.id)
        .then(r=>{
          this.descricao = r[0].descricao
        })
      }
    )

  





    //console.log(this.activatedeRoute.snapshot.parent?.params)
  }

}
