import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [AppComponent],
        }).compileComponents();
    });

    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent); //crease app component
        const app = fixture.componentInstance;
        expect(app).toBeTruthy(); //assert app exists and is truthy
    });

    it(`should have the 'angular-clicker-game' title`, () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app.title).toEqual('angular-clicker-game'); //assert app title is `angular-clicker-game`
    });

    it('should render title', () => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        const compiled = fixture.nativeElement as HTMLElement; //get native element
        expect(compiled.querySelector('h1')?.textContent).toContain(
            'Angular Clicker Game',
        ); //assert h1 (heading 1) text content is `Angular Clicker Game`
    });
    it('should display counter text', () => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        const compiled = fixture.nativeElement as HTMLElement;
        expect(compiled.querySelector('span')?.textContent).toContain(
            'Count: 0',
        ); //assert count test to 0
    });
});
