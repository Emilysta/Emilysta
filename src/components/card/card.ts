import { Component, input } from '@angular/core';
import { ColorVariant } from '../../models/color-variant.model';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class Card {
  /** Color variant */
  public readonly variant = input<ColorVariant>('primary');
  /** Phosphor icons (e.g. 'ph-arrow-right'). Omit for no icon. */
  public readonly icons = input<string[]>([]);
  public readonly title = input<string | undefined>(undefined);
  public readonly description = input<string | undefined>(undefined);
}
