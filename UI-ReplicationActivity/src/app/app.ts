import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { ProductContainer } from './components/product-container/product-container';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header,ProductContainer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('UI-ReplicationActivity');
}
