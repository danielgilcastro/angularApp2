import { Component, OnInit } from '@angular/core';
import { debounce, debounceTime, fromEvent, map, Observable } from 'rxjs';
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

  }


  

  ngOnInit(): void {
    
    //////////Input Pesquisa//////////
      let inputPesquisa= document.getElementById('inputPesquisa') as HTMLInputElement
      fromEvent(inputPesquisa,'input').pipe(
        map(r=>(<HTMLInputElement>r.target).value),
        debounceTime(1000)
      ).subscribe(
        (r)=>{
          if (r!='') {
            this.ofertas = this.oferatsService.pesquisaOfertas(r)
          }else{
            this.ofertas = new Observable
          }
          
        }
      )
    //////////Input Pesquisa//////////



    }
  

}
