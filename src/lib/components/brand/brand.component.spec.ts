import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrandComponent } from './brand.component';
import { Component, DebugElement, Input } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
    standalone: true,
    template: '<crcx-brand [logoSrc]="src" [fallbackLogoSrc]="fallback" />'
})
class TestHostComponent {
    public src = 'https://example.com/logo.png';
    public fallback = 'https://example.com/fallback.ico';
}

describe('BrandComponent', () => {
    let component: BrandComponent;
    let fixture: ComponentFixture<BrandComponent>;
    let debugEl: DebugElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [BrandComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(BrandComponent);
        component = fixture.componentInstance;
        debugEl = fixture.debugElement;
    });

    describe('initialisation', () => {
        it('should create', () => {
            expect(component).toBeTruthy();
        });

        it('should have default alt text', () => {
            expect(component.alt).toBe('CARICAX Logo');
        });

        it('should have default label', () => {
            expect(component.label).toBe('CARICAX');
        });
    });

    describe('template rendering', () => {
        beforeEach(() => {
            fixture.componentRef.setInput('logoSrc', 'assets/logo.png');
            fixture.componentRef.setInput('fallbackLogoSrc', 'assets/fallback.ico');
            fixture.detectChanges();
        });

        it('should render img with correct src', () => {
            const img = debugEl.query(By.css('img'));
            expect(img).toBeTruthy();
            expect(img.nativeElement.src).toContain('assets/logo.png');
        });

        it('should render img with alt text', () => {
            const img = debugEl.query(By.css('img'));
            expect(img.nativeElement.alt).toBe('CARICAX Logo');
        });

        it('should render label text', () => {
            const span = debugEl.query(By.css('.crcx-brand-text'));
            expect(span).toBeTruthy();
            expect(span.nativeElement.textContent).toBe('CARICAX');
        });

        it('should render custom label', () => {
            fixture.componentRef.setInput('label', 'Caricax IT');
            fixture.detectChanges();
            const span = debugEl.query(By.css('.crcx-brand-text'));
            expect(span.nativeElement.textContent).toBe('Caricax IT');
        });

        it('should have aria-label on container', () => {
            const container = debugEl.query(By.css('.crcx-brand'));
            expect(container.nativeElement.getAttribute('aria-label')).toBe('Caricax');
        });

        it('should use img with async decoding and lazy loading', () => {
            const img = debugEl.query(By.css('img'));
            expect(img.nativeElement.getAttribute('decoding')).toBe('async');
            expect(img.nativeElement.getAttribute('loading')).toBe('lazy');
        });
    });
});

describe('BrandComponent — onLogoError', () => {
    let component: BrandComponent;
    let fixture: ComponentFixture<BrandComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [BrandComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(BrandComponent);
        component = fixture.componentInstance;
        fixture.componentRef.setInput('logoSrc', 'https://example.com/logo.png');
        fixture.componentRef.setInput('fallbackLogoSrc', 'https://example.com/fallback.ico');
        fixture.detectChanges();
    });

    it('should fall back when primary image errors', () => {
        const img = fixture.debugElement.query(By.css('img'));
        const errorEvent = new Event('error');
        Object.defineProperty(img.nativeElement, 'src', {
            value: 'https://example.com/logo.png',
            writable: true
        });

        img.nativeElement.src = 'https://example.com/logo.png';
        img.triggerEventHandler('error', errorEvent);
        fixture.detectChanges();

        expect(img.nativeElement.src).toContain('fallback.ico');
    });

    it('should not loop when fallback image also errors', () => {
        const img = fixture.debugElement.query(By.css('img'));
        Object.defineProperty(img.nativeElement, 'src', {
            value: 'https://example.com/fallback.ico',
            writable: true
        });

        const errorEvent = new Event('error');
        img.nativeElement.src = 'https://example.com/fallback.ico';
        img.triggerEventHandler('error', errorEvent);
        fixture.detectChanges();

        expect(img.nativeElement.src).toContain('fallback.ico');
    });

    it('should not crash when event target is not an image', () => {
        expect(() => component.onLogoError({ target: null } as unknown as Event)).not.toThrow();
        expect(() => component.onLogoError({ target: document.createElement('div') } as unknown as Event)).not.toThrow();
    });
});
