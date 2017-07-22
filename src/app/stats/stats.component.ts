import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AuthenticationService } from "app/shared/authentication.service";


import { Observable } from 'rxjs/Observable';
import { MediaService } from "app/shared/media.service";

@Component({
    moduleId: module.id,
    templateUrl: `app/stats/stats.component.html`,
    selector: `app-root`
})
export class StatsComponent implements OnInit {

    private _accessToken: string;

    constructor(
        private _route: ActivatedRoute,
        private _authenticationService: AuthenticationService,
        private _mediaService: MediaService) {}

    ngOnInit(): void {
        let tokenFragment: string = this._route.snapshot.fragment;
        this._authenticationService.setAccessToken(tokenFragment);

        if (this._authenticationService.isAuthenticated()){
            this._mediaService.getMediaByShortcode('BW0u7yEDzN0');
        }
    }

    onLoginWithInstagram() : void {
        this._authenticationService.redirectToAuthenticate("");
    }

}