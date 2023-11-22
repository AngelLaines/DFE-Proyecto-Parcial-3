import { Component, Input } from '@angular/core';
import { ProductInterface, PlatformsInterface } from '../../sales/product-list/interfaces/product-list.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() products!:ProductInterface[];

  getValues(platforms: PlatformsInterface){
    return Object.values(platforms);
  }

  comprar(e?:any){
    console.log(e.target.id);
  }
}
