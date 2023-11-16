import { AlertmodelserviceService } from './../../shared/alertmodelservice.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { catchError, pipe, tap } from 'rxjs';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AcessoService } from 'src/app/service/acesso.service';
import { NewAcessoService } from 'src/app/service/new-acesso.service';
import { AlertmodelComponent } from 'src/app/shared/alertmodel/alertmodel.component';

@Component({
  selector: 'app-new-acessos',
  templateUrl: './new-acessos.component.html',
  styleUrls: ['./new-acessos.component.css']
})
export class NewAcessosComponent {

  formulario!: FormGroup
  bsModalRef! : BsModalRef

  constructor(private formBuilder: FormBuilder,
     private newacesso :NewAcessoService, private alertService: AlertmodelserviceService){

    }

  ngOnInit(){

    this.formulario = this.formBuilder.group({
      login: [null],
      senha: [null],
      descricao:[null]
    });
}



 onSubmit(){
   this.newacesso.postAcesso(this.formulario.value).subscribe(
     success =>{
         this.handerSucess();
     },
     error => {

     this.handerError();
    }
   )

 }

  handerError(){
    this.alertService.showAlertDanger('Erro ao criar Acesso!');
  }

  handerSucess(){
    this.alertService.showAlertSucess('Acesso criado com Sucesso!');
  }


 voltarParaAcessos(){
  this.newacesso.voltarParaListaDeAcessos();
 }
}
