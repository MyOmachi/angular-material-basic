import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-custom-host-element',
  imports: [],
  standalone: true,
  templateUrl: './custom-host-element.component.html',
  styleUrl: './custom-host-element.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomHostElementComponent {
  @HostBinding('attr.aria-valuenow')
  value: number = 1;

  disabled: boolean = false;

  @HostBinding('tabIndex')
  getTabIndex(): number {
    return this.disabled ? -1 : 0;
  }
}
