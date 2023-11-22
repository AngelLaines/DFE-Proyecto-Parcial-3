import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../../shared/services/crud-service.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit{
  data:any;
  constructor(
    private crudService: CrudService
  ){

  }
  ngOnInit(){
    this.crudService.getAll('sales').subscribe((res)=>{
      this.data = res;
      console.log(res);
    })
  }
}
