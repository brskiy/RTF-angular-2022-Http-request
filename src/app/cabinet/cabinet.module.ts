import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from '../material.module';
import { AuthGuard } from '../modules/auth/guards/auth.guard';
import { CabinetLayoutComponent } from './component/cabinet-layout/cabinet-layout.component';


const routes: Routes = [
    {
        path: '',
        component: CabinetLayoutComponent,
        canActivate: [AuthGuard]
    }
];

@NgModule({
    declarations: [
        CabinetLayoutComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        NgbModule,
        MaterialModule
    ],
    exports: [RouterModule]
})
export class CabinetModule { }
