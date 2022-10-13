import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { headerroute } from './header/header-routing.module';
import { HeaderComponent } from './header/header/header.component';
import { LoginComponent } from './login/login.component';
import { RegisterManagerComponent } from './register-manager/register-manager.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'login/header',
    component: HeaderComponent,
    children: headerroute,
  },
  {
    path: 'login/registermanager',
    component: RegisterManagerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
