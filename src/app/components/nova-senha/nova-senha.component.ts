import { ActivatedRoute, Router } from "@angular/router";
import { Component } from "@angular/core";
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { NovasenhaService } from "src/app/service/novasenha.service";
import { HttpErrorResponse } from "@angular/common/http";
import { AlertmodelserviceService } from "src/app/shared/alertmodelservice.service";
import { inovaSenha } from "src/app/interfaces/inovaSenha";

@Component({
  selector: "app-nova-senha",
  templateUrl: "./nova-senha.component.html",
  styleUrls: ["./nova-senha.component.css"],
})
export class NovaSenhaComponent {
  formulario!: FormGroup;

  public token: any;


  constructor(
    private route: ActivatedRoute,
    private service: NovasenhaService,
    private router: Router,
    private alert: AlertmodelserviceService,
    private  formBuilder :FormBuilder,

  ) {}

  ngOnInit() {
    this.pegarTokenurl();
    this.formulario = this.formBuilder.group({
      password:[null,[Validators.required]],
      confirmarsenha:[ null,[Validators.required]]

    }
     )

  }

  onSubmit() {
    const oToken = this.route.snapshot.queryParams["token"];
          this.service.salvarNovaSenha(oToken,this.formulario.value.password).subscribe({
      next: () =>{
        this.resetar();
        this.handerSucess();

      },error: (error) =>{
        this.handerError();
      }
     } )



  }

  voltarParaLogin() {
    this.router.navigate(['login']);
  }

  pegarTokenurl() {
    const oToken = this.route.snapshot.queryParams["token"];
    this.service.validarToken(oToken).subscribe(
      {
         next : ()=>{
           console.log("nada")
         },
         error: (erro) =>{
           this.router.navigate(['redefinirsenha']);
           this.handerError();
         }
      }
    )

  }


  handerError() {
    this.alert.showAlertDanger("Token Expirou Solicite novamente!");
  }

  handerSucess() {
    this.alert.showAlertSucess("Senha alterada com sucesso!");
  }

  resetar() {
    return this.formulario.reset();
  }
}
