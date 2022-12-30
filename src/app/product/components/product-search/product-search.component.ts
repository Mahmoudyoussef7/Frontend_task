import { Component } from '@angular/core';
import { ProductServiceService } from '../../services/product-service.service';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.scss']
})
export class ProductSearchComponent {
  Products?: any;
  substr? :string;
  headElements = ['ID', 'SKU', 'Description', 'Price','IsActive'];
  previous?: string;

  constructor(private service: ProductServiceService) { }

  ngOnInit(): void {
  }

  onClick(){
    debugger
    if(this.substr!=null)
    {
      this.service.Search(this.substr,1,2).subscribe(res => {
        this.Products = res;
        debugger
        console.log(this.Products);
      })
    }
  }
}


