import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth';

@Component({
selector: 'app-login',
standalone: true,
imports: [CommonModule, FormsModule],
templateUrl: './login.html',
styleUrl: './login.css'
})
export class Login {
private authService = inject(AuthService);
private router = inject(Router);

email = '';
password = '';
message = '';

loginUser() {
    const data = {
    email: this.email,
    password: this.password
    };

    this.authService.login(data).subscribe({
        next: (response: any) => {
        console.log('respuesta login:', response);
    
        this.message = response.message;
        localStorage.setItem('token', response.token);
    
        if (response.user) {
            localStorage.setItem('user', JSON.stringify(response.user));
        }
    
        this.router.navigate(['/dashboard']);
        },
        error: (error) => {
        console.log(error);
        this.message = 'Error al iniciar sesión';
        }
    });
}
}
