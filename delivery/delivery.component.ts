import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
interface Delivery {
  orderId: number;
  product: string;
  status: string;
  expectedDate: string;
}

@Component({
  selector: 'app-delivery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent {
  title = 'Delivery Information';

  deliveries: Delivery[] = [
    { orderId: 101, product: 'Apple', status: 'Shipped', expectedDate: '2025-10-25' },
    { orderId: 102, product: 'Milk', status: 'Processing', expectedDate: '2025-10-26' },
    { orderId: 103, product: 'Bread', status: 'Delivered', expectedDate: '2025-10-22' }
  ];
}