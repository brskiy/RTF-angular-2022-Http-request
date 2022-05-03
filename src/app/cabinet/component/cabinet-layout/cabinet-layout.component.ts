import { Component } from '@angular/core';
import { AuthService } from '../../../modules/auth/services/auth.service';

@Component({
    templateUrl: './cabinet-layout.component.html',
    styleUrls: ['./cabinet-layout.component.scss']
})
export class CabinetLayoutComponent {

    constructor(private authService: AuthService) {
    }

    public logout(): void {
        this.authService.logout();
    }
}
