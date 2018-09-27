import { NgModule } from '@angular/core';
import { CapitalizePipe } from './Capitalize/Capitalize';
@NgModule({
	declarations: [CapitalizePipe],
	imports: [],
	exports: [CapitalizePipe]
})
export class PipesModule {}
