import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { DockModule } from 'primeng/dock';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { ChipModule } from 'primeng/chip';
import { TagModule } from 'primeng/tag';
import { DropdownModule } from 'primeng/dropdown';
import {InputMaskModule} from 'primeng/inputmask';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    DockModule,
    DialogModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    ChipModule,
    TagModule,
    DropdownModule,
    InputMaskModule
  ],
  exports: [
    ButtonModule,
    DockModule,
    DialogModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    ChipModule,
    TagModule,
    DropdownModule,
    InputMaskModule
  ],
})
export class PrimeNgModule {}
