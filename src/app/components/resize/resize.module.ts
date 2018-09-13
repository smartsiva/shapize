import { NgModule } from '@angular/core';
import { ResizableComponent } from './resize.component';
import { ShapizeCoreModule } from '../../shapize.core';

@NgModule({
  imports: [ShapizeCoreModule],
  declarations: [ResizableComponent],
  exports: [ResizableComponent]
})
export class ResizeModule { }
