import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummaryComponent } from './summary/summary.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ParentComponent } from './parent/parent.component';




@NgModule({
  declarations: [
    SummaryComponent,
    ProductListComponent,
    ParentComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[ParentComponent]
})
export class SalesModule { }
