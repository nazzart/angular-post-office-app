import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostOfficesComponent } from './post-offices.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [PostOfficesComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class PostOfficesModule { }
