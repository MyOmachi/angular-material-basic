import {
  booleanAttribute,
  Component,
  computed,
  input,
  model,
  numberAttribute,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-custom-card',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './custom-card.component.html',
  styleUrl: './custom-card.component.scss',
})
export class CustomCardComponent {
  value = model(10);

  increment() {
    this.value.update(currentValue => currentValue + 1);
  }

  doubleValue(value: number): number {
    return value * 2;
  }
}
