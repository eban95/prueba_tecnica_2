import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
selector: 'app-empleados',
standalone: true,
imports: [CommonModule, FormsModule],
templateUrl: './empleados.html',
styleUrls: ['./empleados.css'] 
})
export class Empleados implements OnInit {

codigo = 0;
nombre = '';
apellido1 = '';
apellido2 = '';
codigo_departamento = 0;
message = '';

empleados: any[] = [];
departamentos: any[] = [];

empleadoSeleccionadoId: string = '';

ngOnInit(): void {
    setTimeout(() => {
    this.loadEmpleados();
    this.loadDepartamentos();
    }, 0);
}


async guardarEmpleado() {
    try {

    const url = this.empleadoSeleccionadoId
        ? `http://localhost:3000/empleados/${this.empleadoSeleccionadoId}`
        : 'http://localhost:3000/empleados';

    const method = this.empleadoSeleccionadoId ? 'PUT' : 'POST';

    const response = await fetch(url, {
        method,
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({
        codigo: this.codigo,
        nombre: this.nombre,
        apellido1: this.apellido1,
        apellido2: this.apellido2,
        codigo_departamento: this.codigo_departamento
        })
    });

    if (!response.ok) {
        throw new Error('Error al guardar empleado');
    }

    this.message = this.empleadoSeleccionadoId
        ? 'Empleado actualizado'
        : 'Empleado creado';

    this.empleadoSeleccionadoId = '';

    this.codigo = 0;
    this.nombre = '';
    this.apellido1 = '';
    this.apellido2 = '';
    this.codigo_departamento = 0;

    this.loadEmpleados();

    } catch (error) {
    console.log(error);
    this.message = 'Error al guardar empleado';
    }
}

async loadEmpleados() {
    try {
    const response = await fetch('http://localhost:3000/empleados');

    if (!response.ok) {
        throw new Error('Error al obtener empleados');
    }

    const data = await response.json();

    this.empleados = data.data;

    } catch (error) {
    console.log(error);
    this.message = 'Error al cargar empleados';
    }
}

async loadDepartamentos() {
    try {
    const response = await fetch('http://localhost:3000/departamentos');

    if (!response.ok) {
        throw new Error('Error al obtener departamentos');
    }

    const data = await response.json();

    this.departamentos = data.data;

    } catch (error) {
    console.log(error);
    }
}

async eliminarEmpleado(id: string) {
    const confirmDelete = confirm('¿Seguro que quieres eliminar este empleado?');
    if (!confirmDelete) return;

    try {
    const response = await fetch(`http://localhost:3000/empleados/${id}`, {
        method: 'DELETE'
    });

    if (!response.ok) {
        throw new Error('Error al eliminar empleado');
    }

    this.message = 'Empleado eliminado correctamente';
    this.loadEmpleados();

    } catch (error) {
    console.log(error);
    this.message = 'Error al eliminar empleado';
    }
}

seleccionarEmpleado(emp: any) {
    this.codigo = emp.codigo;
    this.nombre = emp.nombre;
    this.apellido1 = emp.apellido1;
    this.apellido2 = emp.apellido2;
    this.codigo_departamento = emp.codigo_departamento;

    this.empleadoSeleccionadoId = emp._id;
}

getNombreDepartamento(codigo: number): string {
    const dep = this.departamentos.find(d => d.codigo === codigo);
    return dep ? dep.nombre : 'Sin departamento';
}

}