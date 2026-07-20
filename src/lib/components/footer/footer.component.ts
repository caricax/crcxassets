import {
    ChangeDetectionStrategy,
    Component,
    Inject,
    Input,
    Optional
} from '@angular/core';
import { NgFor } from '@angular/common';
import { BrandComponent } from '../brand/brand.component';
import { CaricaxBrandingConfig } from '../../models/branding.models';
import {
    CARICAX_BRANDING_CONF,
    DEFAULT_CARICAX_BRANDING_CONF,
} from '../../tokens/branding-conf.tokens';

@Component({
    selector: 'crcx-footer',
    standalone: true,
    imports: [NgFor, BrandComponent],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
    @Input() public config?: Readonly<CaricaxBrandingConfig>;

    public constructor(
        @Optional()
        @Inject(CARICAX_BRANDING_CONF)
        private readonly injectedConf: Readonly<CaricaxBrandingConfig> | null
    ) {}

    public get vm(): Readonly<CaricaxBrandingConfig> {
        return this.config ?? this.injectedConf ?? DEFAULT_CARICAX_BRANDING_CONF;
    }

    public trackByLabel(_: number, item: { readonly label: string }): string {
        return item.label;
    }
}