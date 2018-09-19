import { Component, ViewEncapsulation, ContentChildren, AfterViewInit, TemplateRef, ViewChild,
    QueryList, Input, ElementRef } from '@angular/core';
import { ShapizeTemplateDirective } from '../../directives/shapize.template';

@Component({
    selector: 'splitter',
    templateUrl: 'splitter.component.html',
    styleUrls: ['splitter.component.css'],
    encapsulation: ViewEncapsulation.None
}) export class SplitterComponent implements AfterViewInit {

    @Input() public width = 330;
    @Input() public minWidth = 200;
    @Input() public maxWidth = 550;
    @ContentChildren(ShapizeTemplateDirective)
    public templates: QueryList<ShapizeTemplateDirective>;

    @ViewChild('splitter') public hook: ElementRef;
    @ViewChild('splitHolder') public parent: ElementRef;

    public leftBlock: Object;
    public rightBlock: Object;
    public firstTemplate: TemplateRef<ShapizeTemplateDirective>;
    public secondTemplate: TemplateRef<ShapizeTemplateDirective>;

    private parentRef;
    private dragging: boolean;
    private hookWidth: number;
    private parentLeft: number;
    private parentWidth: number;

    ngAfterViewInit() {
        this.parentRef = this.parent.nativeElement;
        this.parentLeft = this.parentRef.clientLeft;
        this.parentWidth = this.parentRef.clientWidth;
        this.hookWidth = this.hook.nativeElement.clientWidth + 1;

        this.firstTemplate = this.templates.first.templateRef;
        this.secondTemplate = this.templates.last.templateRef;

        this.setEvents();
        this.leftBlock = {
            width: `${this.width}px`,
            'min-width': `${this.minWidth}px`,
            'max-width': `${this.maxWidth}px`
        };
        this.rightBlock = {
            width: `${this.parentWidth - this.width}px`,
            'min-width': `${this.parentWidth - this.maxWidth - this.hookWidth}px`,
            'max-width': `${this.parentWidth - this.maxWidth - this.hookWidth}px`
        };
    }

    private setEvents(): void {

        this.hook.nativeElement.addEventListener('mousedown', (event) => {
            this.dragging = true;
        });

        this.parentRef.addEventListener('mousemove', (event) => {
            if (this.dragging) {
                const left = event.pageX - this.parentLeft;
                this.leftBlock['width'] = `${left}px`;
                this.leftBlock['width'] = `${this.parentWidth - left - this.hookWidth}px`;
            }
        });

        this.parentRef.addEventListener('mouseup', (event) => {
            this.dragging = false;
        });
    }
}
