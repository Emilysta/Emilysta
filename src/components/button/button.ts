import { Component, input } from '@angular/core';

export type ButtonVariant = 'filled' | 'outlined';
export type IconPosition = 'leading' | 'trailing';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class Button {
  /** Button type */
  variant = input<ButtonVariant>('filled');

  /** Phosphor icon name (e.g. 'ph-arrow-right'). Omit for no icon. */
  icon = input<string | null>(null);

  /** Icon position relative to label */
  iconPosition = input<IconPosition>('trailing');
}
