import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DraggableDirective } from './directives/draggable.directive';

import { ShapizeCoreModule } from './shapize.core';
import { SplitterModule } from './components/splitter/splitter.module';
import { ResizeModule } from './components/resize/resize.module';

@NgModule({
  imports: [
    ShapizeCoreModule,
    ResizeModule,
    SplitterModule
  ],
  declarations: [DraggableDirective],
  exports: [ShapizeCoreModule, ResizeModule, DraggableDirective, SplitterModule]
})
export class ShapizeModule { }
