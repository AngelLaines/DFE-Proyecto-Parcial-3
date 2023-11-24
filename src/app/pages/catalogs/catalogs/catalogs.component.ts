import { Component } from '@angular/core';
import { CrudService } from 'src/app/shared/services/crud-service.service';
import { ProductInterface } from '../../sales/product-list/interfaces/product-list.interface';

@Component({
  selector: 'app-catalogs',
  templateUrl: './catalogs.component.html',
  styleUrls: ['./catalogs.component.scss']
})
export class CatalogsComponent {
  constructor(private crudService:CrudService){}
  products:any;
  ngOnInit(){ 
    this.crudService.getAll<ProductInterface[]>('catalogs').subscribe((res)=>{
      this.products = res;
      console.log(res);
    })
  }
  
  hasSend:boolean = false;
  timeout:any;
  saleAdded(){
    this.hasSend = true;
    if (this.timeout) clearTimeout(this.timeout);
    this.timeout = setTimeout(()=>{
        this.hasSend = false
    },3000);
  }
}
