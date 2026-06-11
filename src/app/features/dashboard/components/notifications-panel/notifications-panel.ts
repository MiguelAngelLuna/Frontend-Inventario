import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-notifications-panel',
  imports: [],
  templateUrl: './notifications-panel.html',
  styleUrl: './notifications-panel.css',
})
export class NotificationsPanel {
  @Output() onClose = new EventEmitter<void>();
  @Output() onMarkAllRead = new EventEmitter<void>();
  
  misNotificaciones = [
    { id: 1, tipo: 'stock', titulo: 'Stock Crítico', mensaje: 'Quedan 3 unidades de Nvidia RTX 4060.', tiempo: 'Hace 5 min', leido: false },
    { id: 2, tipo: 'movimiento', titulo: 'Salida Masiva', mensaje: 'Isabella registró salida de 15 Monitores LG.', tiempo: 'Hace 1 hora', leido: false },
    { id: 3, tipo: 'precio', titulo: 'Cambio de Precio', mensaje: 'Laptop HP Pavilion bajó a S/ 2400.00.', tiempo: 'Hace 2 horas', leido: true }
  ];

  marcarComoLeidas() {
    this.misNotificaciones.forEach(n => n.leido = true);
    this.onMarkAllRead.emit(); 
  }

  cerrarPanel() {
    this.onClose.emit();  
  }
}