import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appColorTag]',
})
export class ColorTagDirective {
  constructor(private btn: ElementRef) {}

  ngOnInit() {
    this.btn.nativeElement.style.backgroundColor = this.generateRandomColor();
  }

  generateRandomColor(): string {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const color = 'rgb(' + r + ',' + g + ',' + b + ')';
    return color;
  }
}
