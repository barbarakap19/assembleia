import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

export class PedidoHoracao {
  nome: string;
  email: string;
  menssagem: string
}

@Component({
  selector: 'app-cultos',
  templateUrl: './cultos.component.html',
  styleUrls: ['./cultos.component.css']
})
export class CultosComponent implements OnInit {

  pedidoHoracao: PedidoHoracao;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.pedidoHoracao = new PedidoHoracao();
  }

  getFormGroupClass(isValid: boolean, isPristine: boolean): {} {
    return {
      'form-group': true,
      'has-danger': !isValid && !isPristine,
      'has-success': isValid && !isPristine
    };
  }
  getFormControlClass(isValid: boolean, isPristine: boolean): {} {
    return {
      'form-control': true,
      'form-control-danger': !isValid && !isPristine,
      'form-control-success': isValid && !isPristine
    };
  }

  onSubmit(form: FormControl): void {
    console.log(this.pedidoHoracao);

    this.novo(form);
    
  }

  novo(form: FormControl) {
    form.reset();
    setTimeout(function () {
      this.pedidoHoracao = new PedidoHoracao();
    }.bind(this), 1);
    this.router.navigate([''])
  }

}
