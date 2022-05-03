import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { catchError, first, Observable, of, switchMap } from 'rxjs';
import { RequestMethodType } from '../../http-request/enums';
import { IRequestOptions } from '../../http-request/interfaces/request-options.interface';
import { HttpService } from '../../http-request/services/http.service';
import { LoginModel } from '../data/models/login.model';
import { ILoginRequestModel } from '../data/request-models/login.request-model';
import { ILoginResponseModel } from '../data/response-models/login.response-model';
import { SessionStorageService } from './session-storage.service';


@Injectable()
export class AuthService {

    public loading!: boolean;

    constructor(
        private _httpServiceCustom: HttpService,
        private _httpService: HttpClient,
        private _notifierService: NotifierService,
        private _sessionStorageService: SessionStorageService,
        private _router: Router
    ) { }

    public auth(model: LoginModel): Observable<boolean> {

        const request: IRequestOptions<ILoginRequestModel> = {
            url: "/api/users/auth/login",
            body: model.toDTO(),
            method: RequestMethodType.post
        }

        return this._httpServiceCustom.request<ILoginResponseModel, ILoginRequestModel>(request)
            .pipe(
                switchMap(
                    (result: HttpResponse<ILoginResponseModel>) => {
                        if (result.body?.access_token) {
                            this._sessionStorageService.setSessionData({ token: result.body.access_token })
                            this._notifierService.notify("success", "Авторизация успешно пройдена");
                            this._router.navigateByUrl('/cabinet')

                            return of(true)
                        }
                        return of(false)
                    }),
                first()
            )
    }

    public isValidToken(): Observable<boolean> {
        if (!this._sessionStorageService.getSessionData()?.token) {
            return of(false);
        }

        return this._httpService.get("/api/users/isAuth")
            .pipe(
                switchMap((res: any) => {
                    return of(res.success)
                }),
                catchError(() => {
                    return of(false)
                }))
    }

    public logout(): void {
        this._sessionStorageService.removeSession()
    }
}
