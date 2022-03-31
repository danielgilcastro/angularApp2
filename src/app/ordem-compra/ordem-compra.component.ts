import { Component, OnInit } from '@angular/core';
import { OrdemCompraService } from '../ordem-compra.service';
import { Pedido } from '../shared/pedido.model';


@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers:[OrdemCompraService]
})
export class OrdemCompraComponent implements OnInit {
  constructor(private ordemCompraService:OrdemCompraService) { }

  public idPedidoCompra:number | undefined


  public pedido:Pedido = new Pedido('','','','')
  //public pedido!: Pedido;

  public endereco: string = ""
  public numero: string =''
  public complemento: string = ""
  public formaDePagamento: string = ""

  //Atributos de controle de validação
  public enderecoValido: boolean = false
  public numeroValido: boolean = false
  public complementoValido: boolean = false
  public formaDePagamentoValido: boolean = false


//Primitivo
  public enderecoPrimitivo:boolean = true
  public numeroPrimitivo:boolean = true
  public complementoPrimitivo:boolean = true
  public formaDePagamentoPrimitivo:boolean = true



  atualizaEndereco(vl: string) {
    this.enderecoPrimitivo =false
    this.endereco = vl
    //valido se a string for maior que 3
    this.enderecoValido = (this.endereco.length > 3 )? true:false
    this.habilitaForm()
  }
  atualizaNumero(vl: string) {
    this.numeroPrimitivo =false
    this.numero = vl.replace(/[^0-9]/, '');
    this.numeroValido = vl.length > 0 
    this.habilitaForm()
   }

  atualizaComplemento(vl: string) {
    this.complementoPrimitivo =false
    this.complementoValido = vl.length > 0
    this.complemento = vl
   }
  atualizaFormaDePagamento(vl: string) {
    this.formaDePagamentoPrimitivo =false
    this.formaDePagamentoValido = vl.length > 0 && vl != "Selecione uma opção"
    this.formaDePagamento = vl
    this.habilitaForm()
    
  }

public habilitaForm = ()=>{
  if (this.enderecoValido ==true && this.numeroValido==true && this.formaDePagamentoValido==true) {
      (document.getElementById('btCompra') as HTMLInputElement).removeAttribute('disabled')
  }else{
    (document.getElementById('btCompra') as HTMLInputElement).setAttribute('disabled','')
  }
}

public confirmarComprar= ():void=>{
  this.pedido.endereco = this.endereco;
  this.pedido.numero = this.numero;
  this.pedido.complemento = this.complemento;
  this.pedido.formaDePagamento = this.formaDePagamento;


  //let pedido = new Pedido('','','','')
  this.ordemCompraService.efetivarCompra(this.pedido).subscribe(r=>{
    this.idPedidoCompra = r.id
  })
  
}


  ngOnInit(): void {


  }

}
