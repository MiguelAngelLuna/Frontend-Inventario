import { Component } from '@angular/core';
import { GenericTable, TableColumn } from '../../../../shared/components/generic-table/generic-table';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [GenericTable],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css'
})
export class UserList {
  
  columnasUsuarios: TableColumn[] = [
    { field: 'dni', header: 'DNI' },
    { field: 'nombreCompleto', header: 'USUARIO' },
    { field: 'correo', header: 'CORREO' },
    { field: 'rol', header: 'ROL', isChip: true }, 
    { field: 'activo', header: 'ESTADO', isStatus: true } 
  ];

  listaDeUsuarios = [
    { id: 1, dni: '72345678', nombreCompleto: 'Frank Oscco', correo: 'frank@aura.com', rol: 'Administrador', activo: true },
    { id: 2, dni: '12345678', nombreCompleto: 'Isabella Gómez', correo: 'isabella@aura.com', rol: 'Vendedor', activo: true },
    { id: 3, dni: '87654321', nombreCompleto: 'Carlos Ruiz', correo: 'carlos@aura.com', rol: 'Almacenero', activo: false },
    { id: 4, dni: '99887766', nombreCompleto: 'Lucía Méndez', correo: 'lucia@aura.com', rol: 'Vendedor', activo: true }
  ];

  editarUsuario(usuario: any) {
    console.log('Editando usuario:', usuario);
  }

  cambiarEstadoUsuario(usuario: any) {
    const accion = usuario.activo ? 'desactivar' : 'activar';
    const colorBtn = usuario.activo ? '#d33' : '#22c55e'; 

    Swal.fire({
      title: '¿Confirmar cambio?',
      text: `Vas a ${accion} el acceso de ${usuario.nombreCompleto}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: colorBtn,
      cancelButtonColor: '#94a3b8',
      confirmButtonText: `Sí, ${accion}`
    }).then((result) => {
      if (result.isConfirmed) {
        usuario.activo = !usuario.activo;
        Swal.fire('¡Actualizado!', `Acceso ${usuario.activo ? 'activado' : 'desactivado'}.`, 'success');
      }
    });
  }

  exportarUsuarios(usuariosSeleccionados: any[]) {
    Swal.fire({
      title: 'Exportando Usuarios',
      text: `Generando Excel de ${usuariosSeleccionados.length} usuarios.`,
      icon: 'info',
      confirmButtonColor: '#1e293b'
    });
  }
}