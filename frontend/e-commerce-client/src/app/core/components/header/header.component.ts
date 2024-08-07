import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  items = [
    { url: 'Item', label: 'Shopping car', icon: 'add_shopping_cart' },
    { url: 'Item', label: 'Favorites', icon: 'favorite' },
    { url: 'Item', label: 'Settings', icon: 'settings' },
    { url: 'Item', label: 'Logout', icon: 'exit_to_app' },
  ];
}
