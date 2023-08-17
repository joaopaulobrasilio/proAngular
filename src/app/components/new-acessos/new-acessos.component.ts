import { tap } from 'rxjs';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AcessoService } from 'src/app/service/acesso.service';
import { NewAcessoService } from 'src/app/service/new-acesso.service';

@Component({
  selector: 'app-new-acessos',
  templateUrl: './new-acessos.component.html',
  styleUrls: ['./new-acessos.component.css']
})
export class NewAcessosComponent {

  formulario!: FormGroup

  constructor(private formBuilder: FormBuilder,
    private service :AcessoService, private newacesso :NewAcessoService){

    }

  ngOnInit(){

    this.formulario = this.formBuilder.group({
      login: [null],
      senha: [null],
      descricao:[null]
    });
}

 onSubmit(){
   this.service.postAcesso(this.formulario.value).pipe(
    tap(
      resp =>{
        console.log("acesso criado-:>",resp)
      }
    )
   )
 }

 voltarParaAcessos(){
  this.newacesso.voltarParaListaDeAcessos();
 }
}
