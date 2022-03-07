import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css']
})
export class OfertaComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }



  ngOnInit(): void {
    console.log(this.route.snapshot.params['id'])
   /* mehod subscribe
    this.route.params.subscribe((paramters:any)=>{
      
    })
    */

  }

}
