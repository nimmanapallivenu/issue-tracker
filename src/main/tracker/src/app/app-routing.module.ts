
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PageNotFoundComponent } from './pages/404/page-not-found/page-not-found.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EmployeesComponent } from './pages/employees/employees.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { ProductsComponent } from './pages/products/products.component';

const routes: Routes = [
  { path: '', redirectTo: '/home/dashboard', pathMatch: 'full' },
  { path: 'login' , component: LoginComponent       , data:[{selectedHeaderItemIndex:-1, selectedSubNavItemIndex:-1}] },
  { path: 'logout', component: LogoutComponent      , data:[{selectedHeaderItemIndex:-1, selectedSubNavItemIndex:-1}] },
  {
    path: 'home',
    component: HomeComponent,
    canActivate:[AuthGuardService],
    children:[  // Children paths are appended to the parent path
        { path: '', redirectTo: '/home/dashboard', pathMatch: 'full', data:[{selectedHeaderItemIndex:1, selectedSubNavItemIndex:-1}] },  // Default path (if no deep path is specified for home component like webui/home then it will by default show ProductsComponent )
        {
            path     : 'dashboard',
            component: DashboardComponent,
            data     : [{selectedHeaderItemIndex:0, selectedSubNavItemIndex:-1}],
            children :[
                { path: ''        , redirectTo: '/home/dashboard', pathMatch: 'full'}
               
            ]
        }
      ]
    },
    { path: '**'    , component: PageNotFoundComponent, data:[{selectedHeaderItemIndex:-1, selectedSubNavItemIndex:-1}] }


];


@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true}) ],
  exports: [ RouterModule ],
  declarations:[PageNotFoundComponent]
})
export class AppRoutingModule { }
