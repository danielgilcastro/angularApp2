import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [OfertasService]
})
export class HomeComponent implements OnInit {

  constructor(public ofertasService: OfertasService) { }

  public ofertas: any | Oferta[]
  public ofertasLoading = () => {
    return typeof (this.ofertas)
  }

  ngOnInit(): void {
      this.ofertasService.getOfertas().then((r) => { this.ofertas = r }).catch((err => console.log(err)))

  }

}
