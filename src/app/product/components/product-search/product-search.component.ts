import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductServiceService } from '../../services/product-service.service';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.scss']
})
export class ProductSearchComponent {
  Products:any[]=[];
  substr :any;
  headElements = ['ID', 'SKU', 'Description', 'Price','IsActive'];


  constructor(private service: ProductServiceService) { }

  ngOnInit(): void {
  }

  search(){
    console.log(this.substr)
    debugger
    if(this.substr!=null)
    {
      this.service.Search(this.substr,1,20).subscribe(res => {
        this.Products = res;
        console.log(this.Products);
      });
    }
  }
}



