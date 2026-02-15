import { Component, input } from '@angular/core';
import { ColorVariant } from '../../models/color-variant.model';

@Component({
  selector: 'app-technology-tile',
  templateUrl: './technology-tile.html',
  styleUrl: './technology-tile.scss',
})
export class TechnologyTile {
  /** Color variant */
  public readonly variant = input<ColorVariant>('primary');
  /** Phosphor icon (e.g. 'ph-arrow-right'). */
  public readonly icon = input.required<string>();
  public readonly title = input.required<string>();
  public readonly description = input.required<string>();
}
