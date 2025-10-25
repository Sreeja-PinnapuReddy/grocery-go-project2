import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
interface Order {
  orderId: number;
  items: string;
  total: number;
  date: string;
}

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
  title = 'My Orders';

  orders: Order[] = [
    { orderId: 101, items: 'Apple, Milk', total: 140, date: '2025-10-22' },
    { orderId: 102, items: 'Bread, Banana', total: 50, date: '2025-10-21' }
  ];
}