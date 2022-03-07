import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css'],
  providers: [OfertasService]
})
export class RestaurantesComponent implements OnInit {

  constructor(private ofertasService: OfertasService) { }

  public listaRestaurantes() {
    let restaurantesList = document.getElementById('listaRestaurantes') as HTMLElement
    let strlist = '';

    this.ofertasService.getOfertasPorCategoria('restaurante')
      .then((resp:Oferta[] |any) => {
        for (const i of resp) {
          strlist += `
          <div class="col-md-4">
          <img src="${i.imagens[0].url}" style="width: 200px;" />
          </div>
          
          <div class="col-md-8">
            <div class="row">
              <h4>${i.anunciante}</h4>
            </div>
      
            <div class="row">
              <h5>${i.descricao_oferta}</h5>
            </div>
      
            <div class="row">
              <p>Anunciado por: <b>${i.anunciante}</b></p>
            </div>
      
            <div class="row">
              <p>R$ ${i.valor}</p>
            </div>
      
            <div class="row">
            <a href="oferta/${i.id}">
            <button class="btn btn-outline-success" >Ver oferta</button>
            </a>
              
            </div>
          </div>
          <br>
           `
        }
        restaurantesList.innerHTML = strlist;
      })
    
  }



  ngOnInit(): void {
    this.listaRestaurantes()
  }

}
