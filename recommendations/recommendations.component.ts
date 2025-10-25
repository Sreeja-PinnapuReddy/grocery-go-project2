import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
interface Product {
  name: string;
  price: number;
}

@Component({
  selector: 'app-recommendations',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.css']
})
export class RecommendationsComponent {
  title = 'Recommended for You';

  recommendations: Product[] = [
    { name: 'Orange', price: 30 },
    { name: 'Butter', price: 60 },
    { name: 'Cheese', price: 120 }
  ];
}