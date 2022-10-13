import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { RegisterProductComponent } from './register-product/register-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';

const routes: Routes = [
  {
    path: '',
    component: ProductComponent,
    children: [
      {
        path: 'product-list',
        component: ProductListComponent,
        children: [
          {
            path: 'updateproduct',
            component: UpdateProductComponent,
          },
        ],
      },
      {
        path: 'register-product',
        component: RegisterProductComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
