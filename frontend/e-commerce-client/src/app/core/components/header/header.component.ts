import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  items = [
    { url: 'Item', label: 'Item 1', icon: 'td-car-icon' },
    { url: 'Item', label: 'Item 2', icon: 'td-car-icon' },
    { url: 'Item', label: 'Item 3', icon: 'td-car-icon' },
    { url: 'Item', label: 'Item 4', icon: 'td-car-icon' },
    { url: 'Item', label: 'Item 5', icon: 'td-car-icon' },
  ];
}
