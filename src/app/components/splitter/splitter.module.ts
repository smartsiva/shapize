import { NgModule } from '@angular/core';
import { SplitterComponent } from './splitter.component';
import { ShapizeCoreModule } from '../../shapize.core';

@NgModule({
    imports: [ShapizeCoreModule],
    declarations: [SplitterComponent],
    exports: [SplitterComponent]
}) export class SplitterModule {
}
