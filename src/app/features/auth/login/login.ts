import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class LoginComponent {

  showPassword = false;

  constructor(private router: Router) {}

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  ingresar(event: Event) {
    event.preventDefault(); 
    this.router.navigate(['/dashboard']);
  }
  
  recuperarPassword(event: Event) {
      event.preventDefault(); 

      Swal.fire({
        title: 'Recuperar Contraseña',
        text: 'Ingresa tu correo electrónico y te enviaremos una nueva contraseña temporal.',
        icon: 'info',
        input: 'email', 
        inputPlaceholder: 'ejemplo@correo.com',
        showCancelButton: true,
        confirmButtonColor: '#1e293b', 
        cancelButtonColor: '#94a3b8',
        confirmButtonText: 'Enviar contraseña',
        cancelButtonText: 'Cancelar',
        reverseButtons: true,
        customClass: {
          popup: 'swal-popup',
          title: 'swal-title',
          htmlContainer: 'swal-text',
          confirmButton: 'swal-btn-confirm',
          cancelButton: 'swal-btn-cancel'
        }
      }).then((result) => {

        if (result.isConfirmed && result.value) {
          
          console.log('Enviando nueva contraseña al correo:', result.value);

          Swal.fire({
            title: '¡Correo Enviado!',
            text: `Hemos enviado las instrucciones a: ${result.value}`,
            icon: 'success',
            confirmButtonColor: '#1e293b',
            customClass: {
              popup: 'swal-popup',
              title: 'swal-title',
              htmlContainer: 'swal-text',
              confirmButton: 'swal-btn-confirm'
            }
          });
        }
      });
    }

}