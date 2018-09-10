import { Component, ContentChild, ViewEncapsulation, TemplateRef, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { ShapizeTemplateDirective } from '../../directives/shapize.template';

@Component({
    selector: 'resizable',
    templateUrl: 'resize.template.html',
    styleUrls: ['resize.style.css'],
    encapsulation: ViewEncapsulation.None
})
export class ResizableComponent implements AfterViewInit {

    @ViewChild('plug') public plug: ElementRef;
    @ViewChild('resizable') public resizable: ElementRef;
    @ContentChild(ShapizeTemplateDirective)
    public template: TemplateRef<ShapizeTemplateDirective>;

    private parent: any;
    private plugRef: any;
    private isResizing = false;

    ngAfterViewInit() {
        this.plugRef = this.plug.nativeElement;
        this.parent = this.resizable.nativeElement;

        this.plugRef.addEventListener('mousedown',
            (event) => {
                this.isResizing = true;
            });
        document.addEventListener('mousemove',
            (event) => {
                if (this.isResizing) {
                    this.parent.style.width = `${event.pageX - this.parent.offsetLeft}px`;
                    this.parent.style.height = `${event.pageY - this.parent.offsetTop}px`;
                }
            });
        document.addEventListener('mouseup',
            (event) => {
                this.isResizing = false;
            });
    }
}
