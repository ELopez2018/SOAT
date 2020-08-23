import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

// Pipes
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { PrimengComponentsModule } from './primeng-components.module';
import { MaterialModule } from './material/material.module';


@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        PrimengComponentsModule,
        MaterialModule,
    ],
    declarations: [
        NopagefoundComponent,
        // HeaderComponent,
        // SidebarComponent,
        // BreadcrumbsComponent,
        // NopagefoundComponent
    ],
    exports: [
        NopagefoundComponent,
        // HeaderComponent,
        // SidebarComponent,
        // BreadcrumbsComponent,
        // NopagefoundComponent
    ]
})
export class SharedModule { }
