/**
 * Created by rr4 on 9/12/2016.
 */
import {NgModule, ApplicationRef} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {removeNgStyles, createNewHosts} from '@angularclass/hmr';

import {AppComponent} from './index';
import {MyComponent} from '../components/myComponent/index';
import {AppsService} from '../services/apps/index.ts';
import {appRouter} from './routes';


@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        appRouter
    ],
    declarations: [
        AppComponent,
        MyComponent,
    ],
    providers: [AppsService],
    bootstrap: [AppComponent]
})

export class AppModule {
    constructor(public appRef: ApplicationRef) {}

    hmrOninit(store) {
        console.log('Hmr Store', store);
    }

    hmrOnDestroy(store) {
        let cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
        store.disposeOldHosts = createNewHosts(cmpLocation);
        removeNgStyles();
    }

    hmrAfterDestroy(store) {
        store.disposeOldHosts();
        delete store.disposeOldHosts;
    }

}
