import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';



@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule
  ],
  bootstrap:[AboutComponent],
  exports:[AboutComponent]
})
export class DashboardModule { }
