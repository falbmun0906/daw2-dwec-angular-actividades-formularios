import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  usuario = {
    nombre: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  usuariosRegistrados: any[] = [];
  mensajeExito: string = '';

  // Patrón de email más estricto que requiere dominio completo
  emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Método para verificar si las contraseñas coinciden
  passwordsMatch(): boolean {
    return this.usuario.password === this.usuario.confirmPassword;
  }

  // Método para verificar si debe mostrar error de contraseñas
  shouldShowPasswordError(confirmPasswordField: any): boolean {
    return confirmPasswordField.touched &&
           this.usuario.confirmPassword.length > 0 &&
           !this.passwordsMatch();
  }

  onSubmit(form: NgForm) {
    if (form.valid && this.passwordsMatch()) {
      this.usuariosRegistrados.push({...this.usuario});
      this.mensajeExito = `¡Bienvenido, ${this.usuario.nombre}!`;
      form.resetForm();
      console.log('Usuarios registrados:', this.usuariosRegistrados);
    } else if (!this.passwordsMatch()) {
      alert('Las contraseñas no coinciden');
    }
  }
}

