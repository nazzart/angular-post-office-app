import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PostOfficesModule } from './post-offices/post-offices.module';
import { ShipmentsModule } from './shipments/shipments.module';
import { ToolbarModule } from './layout/toolbar/toolbar.module';
import { AddEditOfficeModule } from './post-offices/add-edit-office/add-edit-office.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    DashboardModule,
    PostOfficesModule,
    ShipmentsModule,
    ToolbarModule,
    AddEditOfficeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
