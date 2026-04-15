import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard implements OnInit {

  user: any = null;
  message = '';

  ngOnInit(): void {
    this.loadUser();
  }

  loadUser(): void {
    const userData = localStorage.getItem('user');

    if (userData) {
      this.user = JSON.parse(userData);
      this.message = 'Usuario cargado correctamente';
    } else {
      this.message = 'No hay usuario logueado';
    }
  }
}
