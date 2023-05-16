
import { AcessoService } from 'src/app/service/acesso.service';
import { Component, Input } from '@angular/core';
import { IAcesso } from 'src/app/interfaces/iacesso';
@Component({
  selector: 'app-acesso',
  templateUrl: './acesso.component.html',
  styleUrls: ['./acesso.component.css']
})
export class AcessoComponent {


  @Input() acessoList : IAcesso[] = [];
  displayedColumns =  ['login','senha'];

  constructor(private acessoService : AcessoService){

  }

  ngOnInit(){
    this.pegarTodos();
  }
   pegarTodos(){
    return this.acessoService.list().subscribe(
      acesso =>{
         this.acessoList = acesso;
      }
    )
   }


}
