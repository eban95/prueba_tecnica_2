import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navegation } from './components/shared/navegation/navegation';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navegation],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('frontend');
}
