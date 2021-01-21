import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditOfficeComponent } from './add-edit-office.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from '../../../environments/environment';
import { PostOfficeService } from '../post-office.service';



@NgModule({
  declarations: [AddEditOfficeComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    PostOfficeService,
    { provide: 'BASE_API_URL', useValue: environment.apiBaseUrl }
  ]
})
export class AddEditOfficeModule { }
