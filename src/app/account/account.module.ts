import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material.module';
import { AccountLayoutComponent } from './component/account-layout/account-layout.component';
import { LoginComponent } from './component/login/login.component';

const routes: Routes = [
    {
        path: '',
        component: AccountLayoutComponent,
        children: [
            {
                path: '',
                redirectTo: 'login'
            },
            {
                path: 'login',
                component: LoginComponent
            }
        ]
    },

];

@NgModule({
    declarations: [
        AccountLayoutComponent,
        LoginComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        MaterialModule
    ],
    exports: [RouterModule]
})
export class AccountModule { }
