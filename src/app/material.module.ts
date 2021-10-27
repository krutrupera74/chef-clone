import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
    imports: [
        MatCardModule,
        MatButtonModule,
        MatToolbarModule,
        MatGridListModule,
        MatProgressSpinnerModule],
    exports: [
        MatCardModule,
        MatButtonModule,
        MatToolbarModule,
        MatGridListModule,
        MatProgressSpinnerModule],
    declarations: [],
    providers: [],
})
export class MaterialModule { }
