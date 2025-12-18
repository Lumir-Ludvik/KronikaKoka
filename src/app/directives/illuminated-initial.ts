import {Directive, ElementRef, Renderer2} from '@angular/core';

@Directive({
  selector: '[appCapitalLetter]',
})
export class IlluminatedInitial {

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {
  }

  ngAfterViewInit(): void {
    const nativeEl = this.el.nativeElement;

    const text = nativeEl.textContent?.trim();
    if (!text) {
      return;
    }
    const firstLetter = text.charAt(0);
    const rest = text.slice(1);

    // Clear original content
    this.renderer.setProperty(nativeEl, 'textContent', '');

    // Append nodes
    this.renderer.appendChild(nativeEl, this.generateFirstLetter(firstLetter));
    this.renderer.appendChild(nativeEl, this.renderer.createText(rest));
  }

  private generateFirstLetter(firstLetter: string) {
    const span = this.renderer.createElement('span');
    this.renderer.setStyle(span, 'font-family', 'Heavy Rain');
    this.renderer.appendChild(span, this.renderer.createText(firstLetter));

    return span;
  }

}
