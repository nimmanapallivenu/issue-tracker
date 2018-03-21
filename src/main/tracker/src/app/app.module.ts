import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IssueComponent } from './issue/issue.component';
import { AppRoutingModule } from './/app-routing.module';
import { LoginAppComponent } from './login-app/login-app.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    IssueComponent,
    LoginAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
