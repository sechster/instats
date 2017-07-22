import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AuthenticationService } from "app/shared/authentication.service";


@Component({
    moduleId: module.id,
    template: `elemele`,
    selector: `app-root`
})
export class AuthenticationComponent implements OnInit {

    private _accessToken: string;

    constructor(
        private _route: ActivatedRoute,
        private _authenticationService: AuthenticationService) {}

    ngOnInit(): void {
        let tokenFragment: string = this._route.snapshot.fragment;
        this._authenticationService.setAccessToken(tokenFragment);
        console.log(`Access token: ${this._authenticationService.AccessToken}`);
    }

    onLoginWithInstagram() : void {
        this._authenticationService.redirectToAuthenticate("");
    }

}