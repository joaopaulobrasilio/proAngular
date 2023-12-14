import { NovaSenhaComponent } from './nova-senha.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatToolbar, MatToolbarModule } from '@angular/material/toolbar';
import { NovaSenhaRoutingModule } from './nova-senha-routing.module';
import { MatInputModule } from '@angular/material/input';
import { CustomFormsModule } from 'ng2-validation';




@NgModule({
  declarations: [
  NovaSenhaComponent

  ],
  imports: [
    MatInputModule,
    CommonModule,
    ReactiveFormsModule,
    MatToolbarModule,
    NovaSenhaRoutingModule


  ]
})
export class NovaSenhaModule { }
