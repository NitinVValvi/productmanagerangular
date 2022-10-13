import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { RegisterProductComponent } from './register-product/register-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { UpdateProductComponent } from './update-product/update-product.component';

@NgModule({
  declarations: [
    ProductComponent,
    ProductListComponent,
    RegisterProductComponent,
    UpdateProductComponent,
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    FormsModule,
  ],
  exports: [
    ProductComponent,
    ProductListComponent,
    RegisterProductComponent,
    UpdateProductComponent,
  ],
})
export class ProductModule {}
