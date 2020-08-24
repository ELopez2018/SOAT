import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

// Pipes
import { NopagefoundComponent } from './nopagefound/nopagefound.component';

import { MaterialModule } from './material/material.module';


@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        MaterialModule,
    ],
    declarations: [
        NopagefoundComponent,

    ],
    exports: [
        NopagefoundComponent,

    ]
})
export class SharedModule { }
