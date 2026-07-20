import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

/* Stateless visual mark (logo and text). */

@Component({
    selector: 'crcx-brand',
    standalone: true,
    templateUrl: './brand.component.html',
    styleUrl: './brand.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class BrandComponent {
    @Input({ required: true }) public logoSrc!: string;
    @Input({ required: true }) public fallbackLogoSrc!: string;
    @Input() public alt = 'CARICAX Logo';
    @Input() public label = 'CARICAX';

/* replacing broken */
public onLogoError(event: Event): void {
    const image = event.target;
    if (!(image instanceof HTMLImageElement)) return;
    if (image.src.endsWith(this.fallbackLogoSrc)) return;
    image.src = this.fallbackLogoSrc;
}
}
