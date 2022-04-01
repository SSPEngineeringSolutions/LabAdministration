import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { PrimeNgModule } from 'src/app/common/modules/prime-ng.module';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes : Routes=[
  {
    path : '', component:MainComponent
  }
]

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class UserModule { }
