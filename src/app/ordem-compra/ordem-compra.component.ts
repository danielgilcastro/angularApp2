import { Component, OnInit, ViewChild  } from '@angular/core';
import { NgForm } from '@angular/forms';
import { OrdemCompraService } from '../ordem-compra.service'
import { Pedido } from '../shared/pedido.model'

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [ OrdemCompraService ]
})
export class OrdemCompraComponent implements OnInit {

  constructor(private ordemCompraService: OrdemCompraService) { }


  public idPedidoNumber:number |undefined

  
  @ViewChild('formulario')  f!: NgForm;


  public confirmarCompra(){
     let testa  = this.f.controls['endereco'].valid && this.f.controls['numero'].valid && this.f.controls['formaDePagamento'].valid
     let pedido= new Pedido( 
       this.f.controls['endereco'].value,
       this.f.controls['numero'].value,
       this.f.controls['complemento'].value,
       this.f.controls['formaDePagamento'].value
     )
     if(testa){
      !window.confirm('confime seus dados') ? 
      console.log('nao vai enviar'): 
      this.ordemCompraService.efetivarCompra(pedido).subscribe(
        (pedidoSeted)=>{
          // console.log(`pedido cadastrado com sucesso ${pedidoSeted.id}`)
          this.idPedidoNumber = pedidoSeted.id
        }
      )


     }
     else{
       alert('corriga os campos')
     }
    
  }


  ngOnInit() {

    



  }
}
