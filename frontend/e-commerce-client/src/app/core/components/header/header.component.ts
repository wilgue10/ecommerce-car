import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  items = [
    { url: 'Item', label: 'Item 1', icon: 'add_shopping_cart' },
    { url: 'Item', label: 'Item 2', icon: 'add_shopping_cart' },
    { url: 'Item', label: 'Item 3', icon: 'add_shopping_cart' },
    { url: 'Item', label: 'Item 4', icon: 'add_shopping_cart' },
    { url: 'Item', label: 'Item 5', icon: 'add_shopping_cart' },
  ];
}
