import { TestBed } from '@angular/core/testing';
import { provideRoutes } from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import {AppComponent} from './index';
import {AppsService} from '../services/apps/index'

describe('App', () => {
    // provide our implementations or mocks to the dependency injector
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            declarations: [AppComponent],
            providers: [AppsService,provideRoutes([])]

        });
    });

    it('should have app', () => {
        let fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        expect(fixture.debugElement.componentInstance).toBeTruthy();
    });
});
