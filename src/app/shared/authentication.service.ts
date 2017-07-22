import { Injectable } from "@angular/core";


@Injectable()
export class AuthenticationService{

    private _clientId: string = `76af9dcff8db48b7a71a3c483a7dd124`;
    private _redirectUri: string = `http%3A%2F%2Flocalhost%3A4200%2Fstats%2F`;
    private _authenticationUrl: string = `https://api.instagram.com/oauth/authorize/?response_type=token&client_id=${this._clientId}&redirect_uri=`;

    AccessToken: string;

    constructor(){}

    redirectToAuthenticate(redirectTo: string) : void {
        window.location.href = this._authenticationUrl + encodeURI(redirectTo);
    }

    setAccessToken(fragment: string) : void {
        if (fragment){
            this.AccessToken = fragment.split('=')[1];
        }
    }

    isAuthenticated(): boolean{
        if(this.AccessToken) {
            return true;
        }
        return false;
    }
}