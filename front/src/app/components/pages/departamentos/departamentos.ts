import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
selector: 'app-departamentos',
standalone: true,
imports: [CommonModule, FormsModule],
templateUrl: './departamentos.html',
styleUrls: ['./departamentos.css']
})
export class Departamentos implements OnInit {

codigo = 0;
nombre = '';
message = '';

departamentos: any[] = [];
empleados: any[] = [];

departamentoSeleccionadoId: string = '';

ngOnInit(): void {
    setTimeout(() => {
    this.loadEmpleados();
    this.loadDepartamentos();
    }, 0);
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
    this.message = 'Error al cargar departamentos';
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
    }
}

async guardarDepartamento() {
    try {

    const url = this.departamentoSeleccionadoId
        ? `http://localhost:3000/departamentos/${this.departamentoSeleccionadoId}`
        : 'http://localhost:3000/departamentos';

    const method = this.departamentoSeleccionadoId ? 'PUT' : 'POST';

    const response = await fetch(url, {
        method,
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({
        codigo: this.codigo,
        nombre: this.nombre
        })
    });

    if (!response.ok) {
        throw new Error('Error al guardar departamento');
    }

    this.message = this.departamentoSeleccionadoId
        ? 'Departamento actualizado'
        : 'Departamento creado';

    this.departamentoSeleccionadoId = '';
    this.codigo = 0;
    this.nombre = '';

    this.loadDepartamentos();

    } catch (error) {
    console.log(error);
    this.message = 'Error al guardar departamento';
    }
}

seleccionarDepartamento(dep: any) {
    this.codigo = dep.codigo;
    this.nombre = dep.nombre;
    this.departamentoSeleccionadoId = dep._id;
}

async eliminarDepartamento(id: string) {
    const confirmDelete = confirm('¿Seguro que quieres eliminar este departamento?');
    if (!confirmDelete) return;

    try {
    const response = await fetch(`http://localhost:3000/departamentos/${id}`, {
        method: 'DELETE'
    });

    if (!response.ok) {
        throw new Error('Error al eliminar departamento');
    }

    this.message = 'Departamento eliminado correctamente';
    this.loadDepartamentos();

    } catch (error) {
    console.log(error);
    this.message = 'Error al eliminar departamento';
    }
}

getEmpleadosPorDepartamento(codigo: number) {
    return this.empleados.filter(emp => emp.codigo_departamento === codigo);
}

mostrarFormulario = false;

}