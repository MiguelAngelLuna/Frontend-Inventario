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
  @Output() onExport = new EventEmitter<void>();

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