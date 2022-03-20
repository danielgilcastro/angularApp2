import { Component, OnInit } from '@angular/core';
import { Observable, Subject, switchMap } from 'rxjs';
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

  private subject =  new Subject()

  public ofertasList : Oferta[] = []

  pesquisa(e: any) {

    if (e != "" && e.length > 1) {
      console.log(e.length)
      this.oferatsService.pesquisaOfertas(e)
      .subscribe(
        (ofertas: Oferta[]) => { this.ofertasList = ofertas }
      )
    }else{
      this.ofertasList = []
    }

  }



  ngOnInit(): void {

  }

}
