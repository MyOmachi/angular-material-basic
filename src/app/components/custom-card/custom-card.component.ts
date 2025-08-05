import { Component, model, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-custom-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './custom-card.component.html',
  styleUrl: './custom-card.component.scss',
})
export class CustomCardComponent {
  value = model(10);
  doubleValue = output<number>();

  increment() {
    this.value.update(currentValue => currentValue + 1);
  }

  doubleIt() {
    this.doubleValue.emit(this.value() * 2);
  }
}
