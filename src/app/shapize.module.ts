import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DraggableDirective } from './directives/draggable.directive';
import { ShapizeTemplateDirective } from './directives/shapize.template';

import { ShapizeCoreModule } from './shapize.core';
import { ResizeModule } from './components/resize/resize.module';

@NgModule({
  imports: [
    ShapizeCoreModule,
    ResizeModule
  ],
  declarations: [DraggableDirective],
  exports: [ResizeModule, DraggableDirective]
})
export class ShapizeModule { }
