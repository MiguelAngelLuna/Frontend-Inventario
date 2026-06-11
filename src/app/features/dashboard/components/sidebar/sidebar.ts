import { Component, Input } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive], 
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class Sidebar {
  @Input() isCollapsed = false; 
  
  isUserMenuOpen = false;

  constructor(private router: Router) {}

  toggleUserMenu() {
    if (!this.isCollapsed) {
      this.isUserMenuOpen = !this.isUserMenuOpen;
    }
  }

  cerrarSesion() {
    this.router.navigate(['/login']);
  }
}