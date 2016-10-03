/**
 * Created by rr4 on 9/14/2016.
 */
import {SpyObject} from '../../public/mocks/helper'
import {AppsService} from './index'
import Spy = jasmine.Spy;

export class MockAppService extends SpyObject{
    getSpy : Spy;
    fakeResponse: any;
    constructor(){
        super(AppsService);

        this.fakeResponse = null;
        this.getSpy = this.spy('get').andReturn(this);
    }

    subscribe(callback: any){
        callback(this.fakeResponse);
    }

    setResponse(json:any): void{
        this.fakeResponse = json;
    }

}
