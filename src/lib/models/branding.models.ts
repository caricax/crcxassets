export interface FooterLink {
    readonly label: string;
    readonly href: string;
    readonly external?: boolean;
}

export interface CaricaxBrandingConfig {
    readonly companyName: string;
    readonly years: string;
    readonly locationLines: readonly string[];
    readonly licenseLabel: string;
    readonly licenseHref: string;
    readonly legalTitle: string;
    readonly legalLinks: readonly FooterLink[];
    readonly logoSrc?: string;
    readonly logoFallbackSrc?: string;
}