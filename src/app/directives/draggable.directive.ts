import { Directive, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
    selector: '[shapizeDraggable]'
}) export class DraggableDirective implements AfterViewInit {

    private elementRef;
    private isDragging = false;

    private offsetX: number;
    private offsetY: number;
    private startTop: number;
    private startleft: number;

    constructor(public eleRef: ElementRef) {
        this.elementRef = this.eleRef.nativeElement;
    }

    ngAfterViewInit() {
        this.elementRef.style.position = 'absolute';
        this.elementRef.style['z-index'] = '1111';

        this.setDraggable();
        this.onMove();
        document.addEventListener('mouseup', (event) => this.isDragging = false );
    }

    private setDraggable(): void {
        this.elementRef.addEventListener('mousedown',
            (event) => {
                event.preventDefault();
                this.isDragging = true;
                this.offsetX = event.pageX;
                this.offsetY = event.pageY;
                this.startTop = this.elementRef.offsetTop;
                this.startleft = this.elementRef.offsetLeft;
            });
    }

    private onMove(): void {
        this.elementRef.addEventListener('mousemove',
            (event) => {
                if (this.isDragging) {
                    this.elementRef.style.left = `${this.startleft + event.pageX - this.offsetX}px`;
                    this.elementRef.style.top = `${this.startTop + event.pageY - this.offsetY}px`;
                }
            });
    }
}
