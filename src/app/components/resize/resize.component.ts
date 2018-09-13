import { Component, ContentChild, ViewEncapsulation, AfterViewInit, ViewChild, ElementRef, Input, QueryList } from '@angular/core';
import { ShapizeTemplateDirective } from '../../directives/shapize.template';

@Component({
    selector: 'resizable',
    templateUrl: 'resize.template.html',
    styleUrls: ['resize.style.css'],
    encapsulation: ViewEncapsulation.None
})
export class ResizableComponent implements AfterViewInit {

    @Input() public width = 100;
    @Input() public height = 100;

    @ViewChild('plug') public plug: ElementRef;
    @ViewChild('resizable') public resizable: ElementRef;
    @ContentChild(ShapizeTemplateDirective) public template: ShapizeTemplateDirective;

    public boxStyle: Object;
    public templateRef: any;

    private parent: any;
    private plugRef: any;
    private isResizing = false;

    ngAfterViewInit() {
        this.plugRef = this.plug.nativeElement;
        this.parent = this.resizable.nativeElement;
        this.templateRef = this.template.templateRef;
        this.boxStyle = {width: `${this.width}px`, height: `${this.height}px`};

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
