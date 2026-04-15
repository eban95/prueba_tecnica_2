import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users.html',
  styleUrl: './users.css'
})
export class Users implements OnInit {

  users: any[] = [];
  message = '';

  ngOnInit(): void {
    this.loadUsers();
  }

  // 🔥 CARGAR USUARIOS
  async loadUsers() {
    try {
      const response = await fetch('http://localhost:3000/users');

      if (!response.ok) {
        throw new Error('Error al obtener usuarios');
      }

      const data = await response.json();

      this.users = data.data; // 🔥 IMPORTANTE
      this.message = 'Usuarios cargados correctamente';

    } catch (error) {
      console.log(error);
      this.message = 'Error al cargar usuarios';
    }
  }

  // 🔥 ELIMINAR USUARIO
  async deleteUser(id: string) {
    const confirmDelete = confirm('¿Seguro que quieres eliminar este usuario?');

    if (!confirmDelete) return;

    try {
      const response = await fetch(`http://localhost:3000/users/${id}`, {
        method: 'DELETE'
      });

      if (!response.ok) {
        throw new Error('Error al eliminar usuario');
      }

      this.message = 'Usuario eliminado correctamente';

      // 🔥 RECARGAR LISTA
      this.loadUsers();

    } catch (error) {
      console.log(error);
      this.message = 'Error al eliminar usuario';
    }
  }
}
