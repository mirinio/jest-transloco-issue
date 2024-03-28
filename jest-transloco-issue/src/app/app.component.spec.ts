import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslocoTestingModule } from '@jsverse/transloco';
import { marker } from '@jsverse/transloco-keys-manager/marker';



describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, RouterTestingModule, TranslocoTestingModule.forRoot({
        translocoConfig: {
          availableLangs: ['de', 'en', 'fr', 'it'],
          defaultLang: 'en',
        },
        preloadLangs: true,
      })],
    }).compileComponents();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain(
      marker('HelloWorld')
    );
  });
});
