import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { LandingComponent } from './component/landing/landing.component';
import { LoaderComponent } from './component/loader/loader.component';



const routes: Route[] = [
    { path: 'u/:routeParam', component: LandingComponent },
    { path: 'loader', component: LoaderComponent },
    { path: '**', component: NotFoundComponent },

];
@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
