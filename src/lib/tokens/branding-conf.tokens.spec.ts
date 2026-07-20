import { DEFAULT_CARICAX_BRANDING_CONF } from './branding-conf.tokens';

describe('DEFAULT_CARICAX_BRANDING_CONF', () => {
    it('should be frozen (immutable)', () => {
        expect(Object.isFrozen(DEFAULT_CARICAX_BRANDING_CONF)).toBeTrue();
    });

    it('should have companyName CARICAX', () => {
        expect(DEFAULT_CARICAX_BRANDING_CONF.companyName).toBe('CARICAX');
    });

    it('should have years in correct format', () => {
        expect(DEFAULT_CARICAX_BRANDING_CONF.years).toMatch(/^\d{4}(–\d{4})?$/);
    });

    it('should have location lines', () => {
        expect(DEFAULT_CARICAX_BRANDING_CONF.locationLines.length).toBeGreaterThan(0);
        expect(Object.isFrozen(DEFAULT_CARICAX_BRANDING_CONF.locationLines)).toBeTrue();
    });

    it('should have MIT license', () => {
        expect(DEFAULT_CARICAX_BRANDING_CONF.licenseLabel).toBe('Licença MIT');
        expect(DEFAULT_CARICAX_BRANDING_CONF.licenseHref).toBe('/licenses/mit');
    });

    it('should have legal links', () => {
        expect(DEFAULT_CARICAX_BRANDING_CONF.legalLinks.length).toBe(5);
        expect(Object.isFrozen(DEFAULT_CARICAX_BRANDING_CONF.legalLinks)).toBeTrue();
    });

    it('should have default logo asset paths', () => {
        expect(DEFAULT_CARICAX_BRANDING_CONF.logoSrc).toContain('assets/logo/');
        expect(DEFAULT_CARICAX_BRANDING_CONF.logoFallbackSrc).toContain('assets/logo/');
    });

    it('should have legal links with required fields', () => {
        for (const link of DEFAULT_CARICAX_BRANDING_CONF.legalLinks) {
            expect(link.label).toBeTruthy();
            expect(link.href).toBeTruthy();
            expect(link.href.startsWith('/')).toBeTrue();
        }
    });
});
