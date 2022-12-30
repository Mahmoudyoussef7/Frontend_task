import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductSearchComponent } from './components/product-search/product-search.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, NgModel } from '@angular/forms';


@NgModule({
  declarations: [
    ProductSearchComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule
  ],
  exports:[
    ProductSearchComponent
  ]

})
export class ProductModule { }
