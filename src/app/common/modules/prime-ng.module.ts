import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { DockModule } from 'primeng/dock';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import { ChipModule } from 'primeng/chip';


@NgModule({
  declarations: [],
  imports: [CommonModule, ButtonModule, DockModule,DialogModule,FormsModule,ReactiveFormsModule,InputTextModule,ChipModule],
  exports: [ButtonModule, DockModule,DialogModule,FormsModule,ReactiveFormsModule,InputTextModule,ChipModule],
})
export class PrimeNgModule {}
