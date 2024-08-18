import { Component } from '@angular/core';
import { Product } from './interfaces/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  products: Product[] = [
    {
      name: 'Wireless Headphones',
      image: 'https://via.placeholder.com/150',
      price: 59.99,
      description: 'High-quality wireless headphones with noise-cancellation feature.',
    },
    {
      name: 'Smartphone',
      image: 'https://via.placeholder.com/150',
      price: 699.99,
      description: 'Latest model smartphone with high-resolution display and powerful processor.',
    }
  ];

  onAddClick(product: Product) {
    this.products.push(product);
  }
}
