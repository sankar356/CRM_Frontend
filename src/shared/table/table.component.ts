import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'] // Correct the property name to styleUrls
})
export class TableComponent {
  @Input() headers: string[] = [];
  @Input() data: any[] = [];
  @Input() add: any;
  @Output() click = new EventEmitter<void>(); // For the create lead button click
  @Output() view = new EventEmitter<any>(); // For view action
  @Output() edit = new EventEmitter<any>(); // For edit action
  isOpen: boolean = false;
  objectKeys = Object.keys;
  currentSortHeader: string | undefined;
  isAscending: boolean = true; // Initialize to a default value

  onSort(header: string): void {
    console.log('Sorting by:', header);
    // Add your sorting logic here
  }

  getSortIconPath(header: string): string {
    if (this.currentSortHeader === header) {
      return this.isAscending ? 'm8 15 4 4 4-4m0-6-4-4-4 4' : 'm8 9 4-4 4 4m0 6-4 4-4-4';
    }
    return 'm8 15 4 4 4-4m0-6-4-4-4 4'; // Default arrow pointing down
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  closeDropdown() {
    this.isOpen = false;
  }

  // Call this method to handle viewing a row
  onView(row: any): void {
    this.view.emit(row); // Emit the selected row for viewing
  }

  // Call this method to handle editing a row
  onEdit(row: any): void {
    this.edit.emit(row); // Emit the selected row for editing
  }

  // Call this method for creating a new lead
  onAdd(): void {
    this.click.emit(); // Emit when create button is clicked
  }
}
