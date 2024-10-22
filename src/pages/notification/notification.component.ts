import { Component } from '@angular/core';
import { TableComponent } from '../../shared/table/table.component';


@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.scss'
})
export class NotificationComponent {
  usersData = [
    { name: 'John Doe', age: 25, email: 'john@example.com' },
    { name: 'Jane Doe', age: 28, email: 'jane@example.com' }
  ];
}
