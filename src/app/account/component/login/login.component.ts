import { Component } from '@angular/core';
import { finalize } from 'rxjs';
import { AuthService } from '../../../modules/auth/services/auth.service';
import { LoginFormViewModel } from '../../view-models/login-form.view-model';



@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {

    public viewModel = new LoginFormViewModel();

    public loading: boolean = false;

    constructor(
        private _authService: AuthService
    ) {
    }

    public onSubmit(): void {
        this.loading = true;
        this._authService.auth(this.viewModel.toModel())
            .pipe(
                finalize(() => {
                    this.loading = false;
                })
            )
            .subscribe()
    }
}
