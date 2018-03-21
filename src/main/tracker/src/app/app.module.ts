import { BrowserModule }    from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule }         from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule }     from '@angular/router';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

//Third Party Modules


import { AppComponent } from './app.component';

import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PageNotFoundComponent } from './pages/404/page-not-found/page-not-found.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EmployeesComponent } from './pages/employees/employees.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { ProductsComponent } from './pages/products/products.component';

// Services
import { AppConfig        } from './app-config';
import { UserInfoService  } from './services/user-info.service';
import { AuthGuardService        } from './services/auth-guard.service';
import { ApiRequestService} from './services/api-request.service';
import { LoginService     } from './services/login.service';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    LogoutComponent,
    DashboardComponent,
    EmployeesComponent,
    CustomersComponent,
    ProductsComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule,
    FormsModule
    
  ],
  providers: [ AuthGuardService,
    UserInfoService,

    ApiRequestService,
    LoginService,
  
    AppConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
