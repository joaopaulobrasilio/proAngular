import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { RedefinirSenhaService } from "src/app/service/redefinir-senha.service";
import { AlertmodelserviceService } from "src/app/shared/alertmodelservice.service";
import {ErrorStateMatcher} from '@angular/material/core';

@Component({
  selector: "app-redefinir-senha",
  templateUrl: "./redefinir-senha.component.html",
  styleUrls: ["./redefinir-senha.component.css"],
})
export class RedefinirSenhaComponent {
  formulario!: FormGroup;
  constructor(
    private formBuiler: FormBuilder,
    private service: RedefinirSenhaService,
    private alert: AlertmodelserviceService,
    private router: Router
  ) {}

  ngOnInit() {
    this.formulario = this.formBuiler.group({
      email: [null, [Validators.required,Validators.email]],
    });


  }

  onSubmit() {
    if(this.formulario.invalid){
     return this.formulario.markAllAsTouched();
    }
    this.service.postEmail(this.formulario.value).subscribe({
      next: () => {
        this.resetar();
        this.handerSucess();
      },
      error: (erro) => {
        console.log(erro);
        this.handerError();
      },
    });
    console.log(this.formulario.value);
  }

  voltarParaLogin() {
    this.router.navigate(["login"]);
  }

  handerError() {
    this.alert.showAlertDanger("Erro ao enviar email,verifique tem novamente!");
  }

  handerSucess() {
    this.alert.showAlertSucess("Email enviado com Sucesso!");
  }

  resetar() {
    return this.formulario.reset();
  }
}
