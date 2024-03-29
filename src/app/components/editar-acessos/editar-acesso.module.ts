import { MatTableModule } from '@angular/material/table';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { EditarAcessosComponent } from './editar-acessos.component';
import { MatInputModule } from '@angular/material/input';




@NgModule({
  declarations: [
   EditarAcessosComponent
  ],
  imports: [
    MatInputModule,
    CommonModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,

  ],
  exports:[
   EditarAcessosComponent,
   MatTableModule
  ]
})
export class EditarAcessoModule { }

