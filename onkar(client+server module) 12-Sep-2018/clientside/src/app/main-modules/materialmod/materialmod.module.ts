import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule,
         MatFormFieldModule,
         MatInputModule, 
         MatCardModule, 
         MatSelectModule, 
         MatDialogModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule, MatButtonModule, MatFormFieldModule, MatInputModule,
    MatCardModule, MatSelectModule, MatDialogModule
  ],
  exports: [ MatButtonModule, MatFormFieldModule, MatInputModule, MatCardModule
  , MatSelectModule, MatDialogModule ]
})
export class MaterialmodModule { }
