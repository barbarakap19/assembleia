import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { EmailService, IMessage } from '../email.service';
@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  message: IMessage = {};

  constructor(
    private router: Router,
    private emailService:EmailService
  ) { }

  ngOnInit() {
    
  }

  onSubmit(form: NgForm) {
   this.sendEmail(form);
    form.reset();
  }

  novo(form: NgForm) {
    form.reset();
    setTimeout(function () {
      this.message = {};
    }.bind(this), 1);
    this.router.navigate([''])
  }

  sendEmail(form: NgForm) {
    this.emailService.sendEmail(form.value).subscribe(res => {
    }, error => {
      console.log('AppComponent Error', error);
    })
  }
}
