<<<<<<< HEAD
import { AlertmodelserviceService } from "./../../shared/alertmodelservice.service";
import { BsModalRef } from "ngx-bootstrap/modal";

import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NewAcessoService } from "src/app/service/new-acesso.service";

=======
import { AlertmodelserviceService } from './../../shared/alertmodelservice.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { catchError, pipe, tap } from 'rxjs';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AcessoService } from 'src/app/service/acesso.service';
import { NewAcessoService } from 'src/app/service/new-acesso.service';
import { AlertmodelComponent } from 'src/app/shared/alertmodel/alertmodel.component';
>>>>>>> bb8bd7514d2228887ea01a25a2a567853699c91d

@Component({
  selector: "app-new-acessos",
  templateUrl: "./new-acessos.component.html",
  styleUrls: ["./new-acessos.component.css"],
})
export class NewAcessosComponent {
  formulario!: FormGroup;
  bsModalRef!: BsModalRef;

<<<<<<< HEAD
  constructor(
    private formBuilder: FormBuilder,
    private newacesso: NewAcessoService,
    private alertService: AlertmodelserviceService
  ) {}
=======
  formulario!: FormGroup
  bsModalRef! : BsModalRef

  constructor(private formBuilder: FormBuilder,
     private newacesso :NewAcessoService, private alertService: AlertmodelserviceService){

    }

  ngOnInit(){
>>>>>>> bb8bd7514d2228887ea01a25a2a567853699c91d

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      login: [null, Validators.required, Validators.min(4), Validators.max(8)],
      senha: [null, Validators.required],
      descricao: [null],
    });
    this.resetar();
  }

<<<<<<< HEAD
  onSubmit() {
    this.newacesso.postAcesso(this.formulario.value).subscribe(() => {
      success: {
        this.handerSucess();

        this.resetar();
      }
      error: () => {
        this.handerError();
        console.log();
      };
    });
  }

  handerError() {
    this.alertService.showAlertDanger("Erro ao criar Acesso!");
  }

  handerSucess() {
    this.alertService.showAlertSucess("Acesso criado com Sucesso!");
  }

  voltarParaAcessos() {
    this.newacesso.voltarParaListaDeAcessos();
  }

  resetar() {
    return this.formulario.reset();
  }
=======


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
>>>>>>> bb8bd7514d2228887ea01a25a2a567853699c91d
}
