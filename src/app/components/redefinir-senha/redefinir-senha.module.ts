import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RedefinirSenhaComponent } from './redefinir-senha.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    RedefinirSenhaComponent



  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    ReactiveFormsModule,
  ]

})
export class RedefinirSenhaModule { }
