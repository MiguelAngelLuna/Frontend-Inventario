import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common'; 

export interface TableColumn {
  field: string;      
  header: string;     
  isChip?: boolean;   
  isCurrency?: boolean; 
  isStock?: boolean;  
  isStatus?: boolean; 
}

@Component({
  selector: 'app-generic-table',
  imports: [CommonModule, NgClass], 
  templateUrl: './generic-table.html',
  styleUrl: './generic-table.css'
})
export class GenericTable {
  @Input() columns: TableColumn[] = []; 
  @Input() data: any[] = [];            
  @Input() totalRecords: number = 0;    

  @Output() onEdit = new EventEmitter<any>();
  @Output() onToggleStatus = new EventEmitter<any>();

  @Output() onExport = new EventEmitter<any[]>();

  currentPage: number = 1;
  itemsPerPage: number = 10;

  selectedItems: any[] = [];

  get paginatedData(): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.data.slice(startIndex, endIndex); 
  }
  get totalPages(): number {
    return Math.ceil(this.data.length / this.itemsPerPage);
  }

  toggleSelection(row: any, event: any) {
    const isChecked = event.target.checked;
    if (isChecked) {
      this.selectedItems.push(row);
    } else {
      this.selectedItems = this.selectedItems.filter(item => item.id !== row.id);
    }
  }

  toggleAll(event: any) {
    const isChecked = event.target.checked;
    if (isChecked) {
      this.selectedItems = [...this.paginatedData];
    } else {
      this.selectedItems = [];
    }
  }

  isSelected(row: any): boolean {
    return this.selectedItems.some(item => item.id === row.id);
  }

  get isAllSelected(): boolean {
    return this.paginatedData.length > 0 && this.selectedItems.length === this.paginatedData.length;
  }

  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }
  
  onItemsPerPageChange(event: any) {
    this.itemsPerPage = Number(event.target.value);
    this.currentPage = 1; // Si cambia la cantidad, regresamos a la página 1
  }

  getChipColor(category: string): string {
      const colors: { [key: string]: string } = {
        'Laptops': 'bg-blue-100 text-blue-700',
        'Componentes': 'bg-purple-100 text-purple-700',
        'Periféricos': 'bg-cyan-100 text-cyan-700',
        'Monitores': 'bg-indigo-100 text-indigo-700'
      };
      return colors[category] || 'bg-gray-100 text-gray-700';
  }

  getStockColor(stock: number): string {
      if (stock > 15) return 'bg-green-100 text-green-700'; 
      if (stock > 0) return 'bg-yellow-100 text-yellow-800';
      return 'bg-red-100 text-red-700'; 
  }

  handleToggle(event: any, row: any) {
    event.preventDefault(); 
    this.onToggleStatus.emit(row); 
  }
}