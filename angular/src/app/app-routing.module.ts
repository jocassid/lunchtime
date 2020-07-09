
import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'login',
        loadChildren: () =>
          import('./hr-files/hr.module').then(m => m.HrModule)
    }
];

const config: ExtraOptions = {
    useHash: true,
    enableTracing: false, // Turn this on to log routing events to the console
    scrollPositionRestoration: 'enabled'
    // ,preloadingStrategy: PreloadAllModules
};


@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
