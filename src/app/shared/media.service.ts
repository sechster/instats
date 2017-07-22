import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http"
import { Observable } from "rxjs/Observable"
import "rxjs/add/operator/map"
import "rxjs/add/operator/do"
import "rxjs/add/operator/catch"
import { AuthenticationService } from "app/shared/authentication.service";

@Injectable()
export class MediaService{

    private _serviceUrl: string = 'https://api.instagram.com/v1/media/';

    constructor(
        private _http: Http,
        private _authenticationService: AuthenticationService){}

    getMediaByShortcode(shortcode: string) : void{
        this._http.get(this.getMethodAddress('shortcode', shortcode))
            .do((data) => console.log('All' + JSON.stringify(data)))
            .catch(this.handleError).subscribe();
    }

    handleError(error: Response): any {
        console.error(error);
        return Observable.throw(error.json().error || "Server error");
    }

    private getMethodAddress(method: string, param: string) {
        return this._serviceUrl + method + '/' + param + `?access_token=${this._authenticationService.AccessToken}`
    }
}