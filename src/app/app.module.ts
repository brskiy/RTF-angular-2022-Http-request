import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { NotifierModule } from 'angular-notifier';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import '@angular/common/locales/global/ru';
import { AuthGuard } from './modules/auth/guards/auth.guard';
import { AuthInterceptor } from './modules/auth/helpers/auth.interceptor';
import { AuthService } from './modules/auth/services/auth.service';
import { HttpService } from './modules/http-request/services/http.service';
import { SessionStorageService } from './modules/auth/services/session-storage.service';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'account'
    },
    {
        path: 'account',
        loadChildren: () => import('./account/account.module').then(m => m.AccountModule)
    },
    {
        path: 'cabinet',
        loadChildren: () => import('./cabinet/cabinet.module').then(m => m.CabinetModule)
    }
];

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        NotifierModule,
        RouterModule.forRoot(routes),
        MaterialModule,
        HttpClientModule,
        BrowserModule,
        NgbModule,
        BrowserAnimationsModule
    ],
    providers: [
        HttpClient,
        HttpService,
        SessionStorageService,
        AuthService,
        { provide: LOCALE_ID, useValue: 'ru-RU' },
        AuthGuard,
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
