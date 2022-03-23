import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';



@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [OfertasService]
})
export class TopoComponent {

  constructor(private oferatsService: OfertasService) { }

  public ofertas!: Observable<Oferta[]>;



  pesquisa(e: string) {
    if (e != "" && e.length > 1) {
     this.ofertas = this.oferatsService.pesquisaOfertas(e)
        // o subscribe vai se feito direto no template com o pipe  (  async  )
        // .subscribe(
        //   (ofertas: Oferta[]) => { this.ofertasList = ofertas }
        // )
    } else {
      this.ofertas = new Observable()
    }
  }

  
  


  ngOnInit(): void {




  }

}
