import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import { AcessoComponent } from './acesso.component';
import { MatToolbarModule } from '@angular/material/toolbar';




@NgModule({
  declarations: [
    AcessoComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatToolbarModule

  ],
  exports:[
    MatTableModule,
    AcessoComponent
  ]
})
export class AcessoModule { }
