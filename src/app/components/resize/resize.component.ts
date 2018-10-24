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
        let parentLeft;
        let parentTop;

        this.plugRef = this.plug.nativeElement;
        this.parent = this.resizable.nativeElement;
        this.templateRef = this.template.templateRef;
        this.boxStyle = {width: `${this.width}px`, height: `${this.height}px`};

        this.plugRef.addEventListener('mousedown',
            (event) => {
                event.stopPropagation();
                this.isResizing = true;
                parentLeft = this.getOffsetLeft(this.parent);
                parentTop = this.getOffsetTop(this.parent);
            });
        document.addEventListener('mousemove',
            (event) => {
                if (this.isResizing) {
                    this.parent.style.width = `${event.pageX - parentLeft}px`;
                    this.parent.style.height = `${event.pageY - parentTop}px`;
                }
            });
        document.addEventListener('mouseup',
            (event) => {
                this.isResizing = false;
            });
    }

    private getOffsetLeft(ele): number {
        let left = 0;
        do {    left += ele.offsetLeft; } while ( ele = ele.offsetParent );
        return left;
    }

    private getOffsetTop(ele): number {
        let left = 0;
        do {    left += ele.offsetTop; } while ( ele = ele.offsetParent );
        return left;
    }
}
