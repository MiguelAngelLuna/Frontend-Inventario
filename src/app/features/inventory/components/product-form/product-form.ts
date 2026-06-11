import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './product-form.html',
  styleUrl: './product-form.css'
})
export class ProductForm implements OnInit {
  @Input() productToEdit: any = null; 
  
  @Output() onClose = new EventEmitter<void>();
  @Output() onSave = new EventEmitter<any>();

  formData: any = {
    codigo: '',
    nombre: '',
    categoria: '',
    precio_venta: null,
    stock: null,
    activo: true
  };

  ngOnInit() {

    if (this.productToEdit) {
      this.formData = { ...this.productToEdit };
    }
  }

  cerrar() {
    this.onClose.emit();
  }

  guardar() {
    if (!this.formData.nombre || !this.formData.codigo || !this.formData.precio_venta) {
      alert('Por favor completa los campos obligatorios');
      return;
    }
    
    if (!this.formData.id) {
      this.formData.id = Date.now();
    }

    this.onSave.emit(this.formData);
  }
}