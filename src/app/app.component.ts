import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CustomCardComponent } from './components/custom-card/custom-card.component';
import { CustomHostElementComponent } from './components/custom-host-element/custom-host-element.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    CustomCardComponent,
    CustomHostElementComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  parentValue = signal(0);
  emittedValue = signal(0);
  constructor() {}

  doubleValue(value: number) {
    this.emittedValue.set(value);
  }
}
