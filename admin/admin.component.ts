import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
}

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  title = 'Admin Panel';

  products: Product[] = [
    { id: 1, name: 'Apple', price: 50, category: 'Fruits' },
    { id: 2, name: 'Milk', price: 40, category: 'Dairy' },
    { id: 3, name: 'Bread', price: 30, category: 'Bakery' }
  ];
}