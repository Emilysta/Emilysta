import { Component, input } from '@angular/core';

type CardVariant = 'primary' | 'secondary' | 'tertiary';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class Card {
  /** Card colro variant */
  public variant = input<CardVariant>('primary');
  /** Phosphor icons (e.g. 'ph-arrow-right'). Omit for no icon. */
  public icons = input<string[]>([]);
  public title = input<string | undefined>(undefined);
  public description = input<string | undefined>(undefined);
}
