import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatOptionModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
    imports: [
        MatToolbarModule,
        FormsModule,
        MatInputModule,
        MatCardModule,
        MatMenuModule,
        MatPaginatorModule,
        MatIconModule,
        MatTabsModule,
        MatSidenavModule,
        MatListModule,
        MatButtonModule,
        MatTableModule,
        MatSlideToggleModule,
        ReactiveFormsModule,
        MatSelectModule,
        MatOptionModule,
    ], exports: [
        MatToolbarModule,
        FormsModule,
        MatInputModule,
        MatPaginatorModule,
        MatCardModule,
        ReactiveFormsModule,
        MatMenuModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatButtonModule,
        MatTabsModule,
        MatTableModule,
        MatSlideToggleModule,
        MatSelectModule,
        MatOptionModule,
    ]

})
export class MaterialModule {
}
