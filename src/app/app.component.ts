import { Component } from '@angular/core';
import {MessageService} from './services/message.service';
// import * as swe from 'sweetalert';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public messageService: MessageService) {}


  contactForm(form) {
    // this.messageService.sendMessage(form).subscribe(() => {
    //   swe("Formulario de contacto", "Mensaje enviado correctamente", 'success');
    // });
  }

  title = 'vive';
}
