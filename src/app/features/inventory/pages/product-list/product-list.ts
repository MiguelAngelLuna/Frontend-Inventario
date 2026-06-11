import { Component, ChangeDetectorRef } from '@angular/core';
import { GenericTable, TableColumn } from '../../../../shared/components/generic-table/generic-table';
import Swal from 'sweetalert2'; 
import { ProductForm } from '../../components/product-form/product-form';

@Component({
  selector: 'app-product-list',
  imports: [GenericTable,ProductForm],
  templateUrl: './product-list.html', 
  styleUrl: './product-list.css'
})
export class ProductList {
  mostrarFormulario = false;
  productoSeleccionado: any = null;

  constructor(private cdr: ChangeDetectorRef) {}
  misColumnas: TableColumn[] = [
    { field: 'codigo', header: 'CÓDIGO' },
    { field: 'nombre', header: 'PRODUCTO' },
    { field: 'categoria', header: 'CATEGORÍA', isChip: true },
    { field: 'precio_venta', header: 'PRECIO', isCurrency: true },
    { field: 'stock', header: 'STOCK', isStock: true },
    { field: 'activo', header: 'ESTADO', isStatus: true }
  ];

  misProductos = [
    { id: 1, codigo: 'LAP-HP-001', nombre: 'Laptop HP Pavilion 15', categoria: 'Laptops', precio_venta: 2500.00, stock: 45, activo: true },
    { id: 2, codigo: 'GPU-RTX-4060', nombre: 'Nvidia RTX 4060 8GB', categoria: 'Componentes', precio_venta: 1200.50, stock: 5, activo: true },
    { id: 3, codigo: 'MON-LG-24', nombre: 'Monitor LG 24" 144Hz', categoria: 'Monitores', precio_venta: 850.00, stock: 0, activo: true },
    { id: 4, codigo: 'RAM-COR-16', nombre: 'Memoria RAM Corsair 16GB', categoria: 'Componentes', precio_venta: 250.00, stock: 25, activo: false },
    { id: 5, codigo: 'LAP-HP-001', nombre: 'Laptop HP Pavilion 15', categoria: 'Laptops', precio_venta: 2500.00, stock: 45, activo: true },
    { id: 6, codigo: 'GPU-RTX-4060', nombre: 'Nvidia RTX 4060 8GB', categoria: 'Componentes', precio_venta: 1200.50, stock: 5, activo: true },
    { id: 7, codigo: 'MON-LG-24', nombre: 'Monitor LG 24" 144Hz', categoria: 'Monitores', precio_venta: 850.00, stock: 0, activo: true },
    { id: 8, codigo: 'LAP-HP-001', nombre: 'Laptop HP Pavilion 15', categoria: 'Laptops', precio_venta: 2500.00, stock: 45, activo: true },
    { id: 9, codigo: 'GPU-RTX-4060', nombre: 'Nvidia RTX 4060 8GB', categoria: 'Componentes', precio_venta: 1200.50, stock: 5, activo: true },
    { id: 10, codigo: 'MON-LG-24', nombre: 'Monitor LG 24" 144Hz', categoria: 'Monitores', precio_venta: 850.00, stock: 0, activo: true },
    { id: 11, codigo: 'LAP-HP-001', nombre: 'Laptop HP Pavilion 15', categoria: 'Laptops', precio_venta: 2500.00, stock: 45, activo: true },
    { id: 12, codigo: 'GPU-RTX-4060', nombre: 'Nvidia RTX 4060 8GB', categoria: 'Componentes', precio_venta: 1200.50, stock: 5, activo: true },
    { id: 13, codigo: 'MON-LG-24', nombre: 'Monitor LG 24" 144Hz', categoria: 'Monitores', precio_venta: 850.00, stock: 0, activo: true },
    { id: 14, codigo: 'LAP-HP-001', nombre: 'Laptop HP Pavilion 15', categoria: 'Laptops', precio_venta: 2500.00, stock: 45, activo: true },
    { id: 15, codigo: 'GPU-RTX-4060', nombre: 'Nvidia RTX 4060 8GB', categoria: 'Componentes', precio_venta: 1200.50, stock: 5, activo: true },
    { id: 16, codigo: 'MON-LG-24', nombre: 'Monitor LG 24" 144Hz', categoria: 'Monitores', precio_venta: 850.00, stock: 0, activo: true },
    { id: 17, codigo: 'LAP-HP-001', nombre: 'Laptop HP Pavilion 15', categoria: 'Laptops', precio_venta: 2500.00, stock: 45, activo: true },
    { id: 18, codigo: 'GPU-RTX-4060', nombre: 'Nvidia RTX 4060 8GB', categoria: 'Componentes', precio_venta: 1200.50, stock: 5, activo: true },
    { id: 19, codigo: 'MON-LG-24', nombre: 'Monitor LG 24" 144Hz', categoria: 'Monitores', precio_venta: 850.00, stock: 0, activo: true },
    { id: 20, codigo: 'LAP-HP-001', nombre: 'Laptop HP Pavilion 15', categoria: 'Laptops', precio_venta: 2500.00, stock: 45, activo: true },
    { id: 21, codigo: 'GPU-RTX-4060', nombre: 'Nvidia RTX 4060 8GB', categoria: 'Componentes', precio_venta: 1200.50, stock: 5, activo: true }, 
  ];

  abrirModalCrear() {
    this.productoSeleccionado = null;
    this.mostrarFormulario = true;
  }

  editarProducto(producto: any) { 
    this.productoSeleccionado = producto; 
    this.mostrarFormulario = true; 
  }

  cerrarModal() {
    this.mostrarFormulario = false;
    this.productoSeleccionado = null;
  }


  guardarProducto(productoGuardado: any) {
    if (this.productoSeleccionado) {
      const index = this.misProductos.findIndex(p => p.id === productoGuardado.id);
      if (index !== -1) {
        this.misProductos[index] = productoGuardado;
      }
      Swal.fire({ title: '¡Actualizado!', text: 'El componente fue modificado.', icon: 'success', timer: 1500, showConfirmButton: false });
    } else {
      this.misProductos.unshift(productoGuardado);
      Swal.fire({ title: '¡Registrado!', text: 'El componente fue agregado al inventario.', icon: 'success', timer: 1500, showConfirmButton: false });
    }
    
    this.cerrarModal();
  }

  exportarExcel(productosSeleccionados: any[]) { alert('Generando reporte Excel...'); }
  
  confirmarCambioEstado(producto: any) {
    const accion = producto.activo ? 'desactivar' : 'activar';
    const colorBtn = producto.activo ? '#d33' : '#22c55e'; 

    Swal.fire({
      title: `¿Estás seguro?`,
      text: `Vas a ${accion} el producto: ${producto.nombre}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: colorBtn,
      cancelButtonColor: '#94a3b8',
      confirmButtonText: `Sí, ${accion}`,
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
      if (result.isConfirmed) {
        producto.activo = !producto.activo;
        this.cdr.detectChanges();
        Swal.fire({
          title: '¡Actualizado!',
          text: `El producto ha sido ${producto.activo ? 'activado' : 'desactivado'} correctamente.`,
          icon: 'success',
          timer: 1500, 
          showConfirmButton: false,
          customClass: {
            popup: 'swal-popup',
            title: 'swal-title',
            htmlContainer: 'swal-text'
          }
        });
      }
    });
  }



}