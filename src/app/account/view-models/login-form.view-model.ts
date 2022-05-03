import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginModel } from '../../modules/auth/data/models/login.model';

export class LoginFormViewModel {

    public form: FormGroup = new FormGroup({
        login: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required)
    });

    public toModel(): LoginModel {
        const result = new LoginModel();
        result.login = this.form.get('login')?.value ?? ''
        result.password = this.form.get('password')?.value ?? ''

        return result;
    }

}
