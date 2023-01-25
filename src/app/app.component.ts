import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Inject,
  Renderer2,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent {
  foods: any[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
  ];
  currentTheme = 'default-theme-light';

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private cdr: ChangeDetectorRef,
    private renderer: Renderer2
  ) {}

  changeTheme(theme: string) {
    this.renderer.removeClass(this.document.body, this.currentTheme);
    this.currentTheme = theme;
    this.renderer.addClass(this.document.body, theme);

    this.cdr.detectChanges();
  }
}
