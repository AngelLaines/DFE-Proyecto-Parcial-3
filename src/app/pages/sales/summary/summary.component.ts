import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SaleInterface } from '../product-list/interfaces/sale.interface';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit{
  @Input() data!:SaleInterface[];
  @Input() productosVendidos!:number;
  @Input() precioTotal!:number;
  
  
  // cantidadProductosVendido(){
  //   const cantidadVendida = this.data.map(sale=>sale.cantidad);
  //   const precioVenta = this.data.map(sale=>+sale.precio.split('$')[1]);
  //   this.productosVendidos=cantidadVendida.reduce((a,b)=>a+b,0);
  //   this.precioTotal = precioVenta.reduce((a,b)=>a+b,0);
  // }
  ngOnInit(){
    console.log("object");
    
  }
}
