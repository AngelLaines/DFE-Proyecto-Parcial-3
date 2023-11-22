import { Component, Input, OnInit } from '@angular/core';
import { CrudService } from 'src/app/shared/services/crud-service.service';
import { ProductInterface } from './interfaces/product-list.interface';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit{
  @Input() data!:any;
  products?:ProductInterface[]
  constructor(
    private crudService: CrudService,
    ){}
  ngOnInit(){ 
    this.crudService.getAll<ProductInterface[]>('catalogs').subscribe((res)=>{
      this.products = res;
      console.log(res);
    })
  }

  getName(id:number, products:ProductInterface[]){
    return products.find(product=>id===+product.id)?.name;
  }
}
