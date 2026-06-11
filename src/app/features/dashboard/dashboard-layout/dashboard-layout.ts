import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NotificationsPanel } from "../components/notifications-panel/notifications-panel";
import { Sidebar } from '../components/sidebar/sidebar';

@Component({
  selector: 'app-dashboard-layout',
  imports: [RouterOutlet , NotificationsPanel,Sidebar],
  templateUrl: './dashboard-layout.html',
  styleUrl: './dashboard-layout.css',
})
export class DashboardLayout {
  
  isSidebarCollapsed = false;
  isUserMenuOpen = false;
  isNotificationOpen = false;
  notificacionesNoLeidas = 2;
  
  constructor(private router: Router) {}

  toggleNotifications() {
    this.isNotificationOpen = !this.isNotificationOpen;
    if (this.isNotificationOpen) {
      this.isUserMenuOpen = false;
    }
  }

  toggleSidebar() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
    if (this.isSidebarCollapsed) {
      this.isUserMenuOpen = false;
    }
  }


  limpiarCampana() {
    this.notificacionesNoLeidas = 0;
  }
}