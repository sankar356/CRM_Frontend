import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
    @Input() headers: string[] = [];
    @Input() data: any[] = [];
    @Input() add: any;
    @Input() click: any;
    @Input() view: any;
    @Input() clicks: any;
    @Input() event: any;
    @Input() evens: any;
    isOpen: boolean = false;
    objectKeys = Object.keys;
  currentSortHeader: string | undefined;
  isAscending: any;


    onEdit(row: any): void {
      console.log('Editing row:', row);
    }
    
    onDelete(row: any): void {
      console.log('Deleting row:', row);
    }
    
    onSort(header: string): void {
      console.log('Sorting by:', header);
      // Add your sorting logic here
    }
    getSortIconPath(header: string): string {
      if (this.currentSortHeader === header) {
        return this.isAscending ? 'm8 15 4 4 4-4m0-6-4-4-4 4' : 'm8 9 4-4 4 4m0 6-4 4-4-4';
      }
      return 'm8 15 4 4 4-4m0-6-4-4-4 4';  // Default arrow pointing down
    }
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    }
  
    closeDropdown() {
      this.isOpen = false;
    }
    
}
