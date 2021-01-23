import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PostOfficesModule } from './post-offices/post-offices.module';
import { ShipmentsModule } from './shipments/shipments.module';
import { ToolbarModule } from './layout/toolbar/toolbar.module';
import { AddEditOfficeModule } from './post-offices/add-edit-office/add-edit-office.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppHttpInterceptor } from './services/http-interceptor.service';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    DashboardModule,
    PostOfficesModule,
    ShipmentsModule,
    ToolbarModule,
    AddEditOfficeModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: AppHttpInterceptor, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
