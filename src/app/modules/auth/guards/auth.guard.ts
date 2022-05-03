import { Injectable } from '@angular/core'
import { CanActivate, Router } from '@angular/router'
import { Observable, of, switchMap } from 'rxjs'
import { AuthService } from '../services/auth.service'

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private _auth: AuthService,
        private _router: Router
    ) { }

    public canActivate(): Observable<boolean> {
        return this._auth.isValidToken()
            .pipe(
                switchMap((res: boolean) => {
                    if (!res) {
                        this._router.navigateByUrl('/account');
                    }
                    return of(res)
                })
            )
    }
}
