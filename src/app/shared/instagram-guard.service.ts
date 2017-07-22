import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { AuthenticationService } from "app/shared/authentication.service";

@Injectable()
export class InstagramGuard implements CanActivate {

    constructor(
        private _router: Router,
        private _authenticationService: AuthenticationService) {
    }

    canActivate(route: ActivatedRouteSnapshot): boolean {

        if (this._authenticationService.isAuthenticated() == false){
            console.log("InstagramGuard: not authenticated");
            this._authenticationService.redirectToAuthenticate(window.location.href);
        }

        console.log("InstagramGuard: authenticated");
        return true;
    }
}
