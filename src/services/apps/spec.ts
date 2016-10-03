import {MockBackend} from '@angular/http/testing';
import {Http, ConnectionBackend, BaseRequestOptions, Response, ResponseOptions} from '@angular/http';
import {AppsService} from './index';
import {tick, fakeAsync} from '@angular/core/testing/fake_async';
import {inject, TestBed} from '@angular/core/testing/test_bed';

describe('service: AppsService', ()=> {
    beforeEach(()=> {
        TestBed.configureTestingModule({
            providers: [
                {
                    provide: Http, useFactory: (backend: ConnectionBackend, defaultOptions: BaseRequestOptions) => {
                    return new Http(backend, defaultOptions);
                }, deps: [MockBackend, BaseRequestOptions]
                },
                {provide: AppsService, useClass: AppsService},
                {provide: MockBackend, useClass: MockBackend},
                {provide: BaseRequestOptions, useClass: BaseRequestOptions}
            ]
        });
    });

    it('should retrieve chap application list from api',
        inject([AppsService, MockBackend],
        fakeAsync((appsService: AppsService, mockBackend: MockBackend)=> {
            let res : Response;
            mockBackend.connections.subscribe(c =>{
                expect(c.request.url).toBe('http://localhost:3000/items');
                let response = new ResponseOptions({body: '["item1", "item2"]'});
                c.mockRespond(new Response(response));
            });
            appsService.get().subscribe((response)=>{
                res = response;
            });
            tick();
            console.log(res);
            expect(res[0]).toBe('item1');
        }))
    );
});
