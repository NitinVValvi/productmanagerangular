import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from '../product/product/product.component';
import { HeaderComponent } from './header/header.component';

export const headerroute: Routes = [
  {
    path: 'product',
    loadChildren: () =>
      import('src/app/product/product.module').then(
        (module) => module.ProductModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(headerroute)],
  exports: [RouterModule],
})
export class HeaderRoutingModule {}
