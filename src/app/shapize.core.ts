import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShapizeTemplateDirective } from './directives/shapize.template';

@NgModule({
    declarations: [ShapizeTemplateDirective],
    exports: [ShapizeTemplateDirective, CommonModule],
    imports: [CommonModule]
}) export class ShapizeCoreModule {
}
