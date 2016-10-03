// src/app/routes.ts
import {RouterModule, Routes} from '@angular/router';
import {MyComponent} from '../components/myComponent/index';

const routes: Routes = [
    { path: '', component: MyComponent }
];

export const appRouter = RouterModule.forRoot(routes);

