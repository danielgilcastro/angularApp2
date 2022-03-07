import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-diversao',
  templateUrl: './diversao.component.html',
  styleUrls: ['./diversao.component.css'],
  providers: [OfertasService]
})
export class DiversaoComponent implements OnInit {

  constructor(private ofertasService: OfertasService) { }



  public setListaRestaurante() {
    this.ofertasService.getOfertasPorCategoria('diversao')
      .then(resp => {
        let listaStr = ''
        let restauranteList = document.getElementById('restauranteList') as HTMLElement
        for (const i of resp) {
          listaStr += `  
        <div class="col-md-4">
        <img src="${i.imagens[0].url}" style="width: 200px;" />
        </div>
  
        <div class="col-md-8">
        <div class="row">
          <h4>${i.titulo}</h4>
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
        <button class="btn btn-outline-success">Ver oferta</button>
        </a>

        </div>
        </div>
        `
        }
        restauranteList.innerHTML = listaStr
      })
  }

  ngOnInit(): void {
    this.setListaRestaurante()

  }

}
