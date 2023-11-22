import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogsComponent } from './catalogs/catalogs.component';
import { ProductComponent } from './product/product.component';
import { CrudService } from 'src/app/shared/services/crud-service.service';



@NgModule({
  declarations: [
    CatalogsComponent,
    ProductComponent
  ],
  imports: [
    CommonModule
  ],
  providers:[
    CrudService
  ],
  exports:[
    CatalogsComponent
  ]
})
export class CatalogsModule { }
