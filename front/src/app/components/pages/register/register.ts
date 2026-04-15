import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../services/auth';

@Component({
selector: 'app-register',
standalone: true,
imports: [CommonModule, FormsModule],
templateUrl: './register.html',
styleUrl: './register.css'
})
export class Register {
private authService = inject(AuthService);

name = '';
email = '';
password = '';
message = '';

registerUser() {
    const data = {
    name: this.name,
    email: this.email,
    password: this.password
    };

    this.authService.register(data).subscribe({
    next: (response: any) => {
        this.message = response.message;
        console.log(response);
    },
    error: (error) => {
        console.log(error);
        this.message = 'Error al registrar el usuario';
    }
    });
}
}
