import {TestBed, async} from '@angular/core/testing';
import {Router} from '@angular/router';
import {MyComponent} from './index';
import {AppsService} from '../../services/apps/index';
import {MockAppService} from '../../services/apps/mock';
import {MockRouter} from '../../app/mock-routes';

describe('component: MyComponent', () => {
    let mockChapListService : MockAppService;
    let mockRouter: MockRouter;

    beforeEach(() => {
        mockChapListService = new MockAppService();
        mockRouter = new MockRouter();
        TestBed.configureTestingModule({
            declarations: [MyComponent],
            providers:[
                {provide: AppsService, useValue: mockChapListService},
                {provide: Router, useValue: mockRouter}
            ]
        });
    });

    it('should call the AppsService on load', ()=>{
        let fixture = TestBed.createComponent(MyComponent);
        let component = fixture.debugElement.componentInstance;
        fixture.detectChanges();
        console.log(mockChapListService.getSpy);
        expect(mockChapListService.getSpy).toHaveBeenCalled();
    });
});
