import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordem-compra-sucesso',
  templateUrl: './ordem-compra-sucesso.component.html',
  styleUrls: ['./ordem-compra-sucesso.component.css']
})
export class OrdemCompraSucessoComponent implements OnInit {

  constructor() { }

  @Input('idDoProduto') public idPedidoCompra:number|undefined

  ngOnInit(): void {
  }

}
