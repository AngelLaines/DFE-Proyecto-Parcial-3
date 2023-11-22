import { Component, Input } from '@angular/core';
import { ProductInterface } from '../../sales/product-list/interfaces/product-list.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() products!:ProductInterface[];
}
