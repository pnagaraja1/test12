/* beautify ignore:start */
import {Component} from '@angular/core';
import {AppsService} from "../../services/apps";
import {Router} from "@angular/router";
/* beautify ignore:end */

@Component({
    selector: 'my-component',
    styles: [require('./style.scss')],
    template: require('./template.html'),
})
export class MyComponent {

    items;
    url: string;
    showModal: boolean;

    constructor(private service: AppsService, private router: Router) { }

    ngOnInit() {
        this.service.get()
            .subscribe(items => {
                this.items = items;
            });
    }
}
