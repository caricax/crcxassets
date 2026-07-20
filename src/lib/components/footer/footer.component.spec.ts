import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterComponent } from './footer.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { CARICAX_BRANDING_CONF, DEFAULT_CARICAX_BRANDING_CONF } from '../../tokens/branding-conf.tokens';
import { CaricaxBrandingConfig } from '../../models/branding.models';

const TEST_CONFIG: Readonly<CaricaxBrandingConfig> = Object.freeze({
    companyName: 'Caricax Test',
    years: '2024–2026',
    locationLines: Object.freeze(['Test City']),
    licenseLabel: 'MIT License',
    licenseHref: '/licenses/mit',
    legalTitle: 'Legal',
    legalLinks: Object.freeze([
        { label: 'Privacy', href: '/privacy' },
        { label: 'Terms', href: '/terms' }
    ]),
    logoSrc: 'assets/test-logo.png'
});

describe('FooterComponent', () => {
    let component: FooterComponent;
    let fixture: ComponentFixture<FooterComponent>;
    let debugEl: DebugElement;

    describe('with default config (no DI, no @Input)', () => {
        beforeEach(async () => {
            await TestBed.configureTestingModule({
                imports: [FooterComponent]
            }).compileComponents();

            fixture = TestBed.createComponent(FooterComponent);
            component = fixture.componentInstance;
            debugEl = fixture.debugElement;
            fixture.detectChanges();
        });

        it('should create', () => {
            expect(component).toBeTruthy();
        });

        it('should fall back to DEFAULT_CARICAX_BRANDING_CONF', () => {
            expect(component.vm).toBe(DEFAULT_CARICAX_BRANDING_CONF);
        });

        it('should render company name', () => {
            const text = debugEl.nativeElement.textContent;
            expect(text).toContain('CARICAX');
        });

        it('should render copyright', () => {
            const text = debugEl.nativeElement.textContent;
            expect(text).toContain('©');
        });

        it('should render location lines', () => {
            const text = debugEl.nativeElement.textContent;
            expect(text).toContain('Carianos');
            expect(text).toContain('Brasil');
        });

        it('should render license label', () => {
            const text = debugEl.nativeElement.textContent;
            expect(text).toContain('Licença MIT');
        });

        it('should render legal title', () => {
            const heading = debugEl.query(By.css('.crcx-heading'));
            expect(heading).toBeTruthy();
            expect(heading.nativeElement.textContent).toContain('PRIVACIDADE');
        });

        it('should render legal links', () => {
            const links = debugEl.queryAll(By.css('.crcx-legal-link'));
            expect(links.length).toBe(5);
            expect(links[0].nativeElement.textContent).toContain('Política de Privacidade');
        });
    });

    describe('with @Input config override', () => {
        beforeEach(async () => {
            await TestBed.configureTestingModule({
                imports: [FooterComponent]
            }).compileComponents();

            fixture = TestBed.createComponent(FooterComponent);
            component = fixture.componentInstance;
            component.config = TEST_CONFIG;
            fixture.detectChanges();
        });

        it('should use provided config', () => {
            expect(component.vm).toBe(TEST_CONFIG);
        });

        it('should render custom company name', () => {
            const text = debugEl.nativeElement.textContent;
            expect(text).toContain('Caricax Test');
        });

        it('should render custom legal links', () => {
            const links = debugEl.queryAll(By.css('.crcx-legal-link'));
            expect(links.length).toBe(2);
            expect(links[0].nativeElement.textContent).toContain('Privacy');
            expect(links[1].nativeElement.textContent).toContain('Terms');
        });

        it('should render brand component when logoSrc is provided', () => {
            const brand = debugEl.query(By.css('crcx-brand'));
            expect(brand).toBeTruthy();
        });

        it('should set external link attributes', () => {
            const configWithExternal = Object.freeze({
                ...TEST_CONFIG,
                legalLinks: Object.freeze([
                    { label: 'External', href: 'https://example.com', external: true }
                ])
            });
            component.config = configWithExternal;
            fixture.detectChanges();

            const link = debugEl.query(By.css('.crcx-legal-link'));
            expect(link.nativeElement.getAttribute('target')).toBe('_blank');
            expect(link.nativeElement.getAttribute('rel')).toContain('noopener');
        });
    });

    describe('with injection token', () => {
        beforeEach(async () => {
            await TestBed.configureTestingModule({
                imports: [FooterComponent],
                providers: [
                    { provide: CARICAX_BRANDING_CONF, useValue: TEST_CONFIG }
                ]
            }).compileComponents();

            fixture = TestBed.createComponent(FooterComponent);
            component = fixture.componentInstance;
            fixture.detectChanges();
        });

        it('should use injected config', () => {
            expect(component.vm).toBe(TEST_CONFIG);
        });

        it('should render injected company name', () => {
            const text = debugEl.nativeElement.textContent;
            expect(text).toContain('Caricax Test');
        });
    });

    describe('@Input overrides injection token', () => {
        let overrideConfig: Readonly<CaricaxBrandingConfig>;

        beforeEach(async () => {
            overrideConfig = Object.freeze({
                ...TEST_CONFIG,
                companyName: 'Override'
            });

            await TestBed.configureTestingModule({
                imports: [FooterComponent],
                providers: [
                    { provide: CARICAX_BRANDING_CONF, useValue: TEST_CONFIG }
                ]
            }).compileComponents();

            fixture = TestBed.createComponent(FooterComponent);
            component = fixture.componentInstance;
            component.config = overrideConfig;
            fixture.detectChanges();
        });

        it('should prefer @Input over injected config', () => {
            expect(component.vm.companyName).toBe('Override');
        });
    });

    describe('without logoSrc', () => {
        beforeEach(async () => {
            const noLogoConfig = Object.freeze({
                ...DEFAULT_CARICAX_BRANDING_CONF,
                logoSrc: undefined
            });

            await TestBed.configureTestingModule({
                imports: [FooterComponent],
                providers: [
                    { provide: CARICAX_BRANDING_CONF, useValue: noLogoConfig }
                ]
            }).compileComponents();

            fixture = TestBed.createComponent(FooterComponent);
            component = fixture.componentInstance;
            fixture.detectChanges();
        });

        it('should not render crcx-brand when logoSrc is undefined', () => {
            const brand = debugEl.query(By.css('crcx-brand'));
            expect(brand).toBeFalsy();
        });
    });

    describe('vm getter resolution priority', () => {
        beforeEach(async () => {
            await TestBed.configureTestingModule({
                imports: [FooterComponent]
            }).compileComponents();

            fixture = TestBed.createComponent(FooterComponent);
            component = fixture.componentInstance;
        });

        it('should return config when @Input is provided', () => {
            component.config = TEST_CONFIG;
            expect(component.vm).toBe(TEST_CONFIG);
        });

        it('should return default when nothing is provided', () => {
            expect(component.vm).toBe(DEFAULT_CARICAX_BRANDING_CONF);
        });
    });

    describe('trackByLabel', () => {
        beforeEach(async () => {
            await TestBed.configureTestingModule({
                imports: [FooterComponent]
            }).compileComponents();

            fixture = TestBed.createComponent(FooterComponent);
            component = fixture.componentInstance;
        });

        it('should return label as track key', () => {
            expect(component.trackByLabel(0, { label: 'Test' })).toBe('Test');
            expect(component.trackByLabel(1, { label: 'Privacy' })).toBe('Privacy');
        });
    });
});
