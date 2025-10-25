import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  title = 'Products';

  products: Product[] = [
    { id: 1, name: 'Apple', price: 50, category: 'Fruits' },
    { id: 2, name: 'Banana', price: 20, category: 'Fruits' },
    { id: 3, name: 'Milk', price: 40, category: 'Dairy' },
    { id: 4, name: 'Bread', price: 30, category: 'Bakery' }
  ];
}