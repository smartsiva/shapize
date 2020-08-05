import { Directive, TemplateRef } from '@angular/core';

@Directive({
    selector: '[shapizeTemplate]'
})
export class ShapizeTemplateDirective {

    constructor(public templateRef: TemplateRef<any>) {}
}
