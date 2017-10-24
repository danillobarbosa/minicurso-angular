import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-contato",
  templateUrl: "./contato.component.html",
  styleUrls: ["./contato.component.css"]
})
export class ContatoComponent implements OnInit {
  contato: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.contato = this.formBuilder.group({
      nome: ["", [Validators.required, Validators.minLength(10)]],
      telefone: ["", Validators.required],
      mensagem: ["", [Validators.required, Validators.maxLength(140)]]
    });
  }

  enviarMensagem(form: FormGroup) {
    if (form.valid) {
      alert('Mensagem Enviada');
    }
  }
}
