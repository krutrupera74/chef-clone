import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatInputModule} from '@angular/material/input';

@NgModule({
    imports: [
        MatCardModule,
        MatButtonModule,
        MatToolbarModule,
        MatGridListModule,
        MatProgressSpinnerModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatMenuModule,
        MatInputModule,
    ],
    exports: [
        MatCardModule,
        MatButtonModule,
        MatToolbarModule,
        MatGridListModule,
        MatProgressSpinnerModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatMenuModule,
        MatInputModule,
    ],
    declarations: [],
    providers: [],
})
export class MaterialModule { }
