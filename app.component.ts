import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']   // ✅ link your CSS file here
})
export class AppComponent {
  title = 'grocery-go';
}