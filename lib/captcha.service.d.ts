import { NgZone, Optional } from '@angular/core';
import { Observable } from 'rxjs';
export declare class ReCaptchaService {
    private scriptLoaded;
    private readySubject;
    constructor(zone: NgZone);
    getReady(language: string, global: boolean): Observable<boolean>;
    private onloadCallback();
}
export declare function RECAPTCHA_SERVICE_PROVIDER_FACTORY(ngZone: NgZone, parentDispatcher: ReCaptchaService): ReCaptchaService;
export declare const RECAPTCHA_SERVICE_PROVIDER: {
    provide: typeof ReCaptchaService;
    deps: (typeof NgZone | Optional[])[];
    useFactory: typeof RECAPTCHA_SERVICE_PROVIDER_FACTORY;
};
