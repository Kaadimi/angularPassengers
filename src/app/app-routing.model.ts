import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { PassengerDashboardModuleComponent } from './passengers/containers/passenger-dashboard.component'
import { PassengerDeatilComponent } from './passengers/containers/passenger-detail/passenger-detail.component'
import { NotFoundComponent } from './passengers/components/404Page/404.component'

const routes: Routes = [
    {path: "", component: PassengerDashboardModuleComponent, pathMatch: "full"},
    {path: "passenger/:id", component: PassengerDeatilComponent},
    {path: "**", component: NotFoundComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModel {}