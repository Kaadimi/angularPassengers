import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { PassengerDashboardModuleComponent } from './containers/passenger-dashboard.component'
import { PassengerDeatilComponent } from './containers/passenger-detail/passenger-detail.component'
import { PassengerCounterComponent } from './components/counters/passenger-counter.component'
import { PassengerComponent} from './components/passenger/passenger.component'
import { addPassengerComponent } from './components/addPassenger/addPassenger.component'
import { AppRoutingModel } from '../app-routing.model'
import { NotFoundComponent } from '../passengers/components/404Page/404.component'

@NgModule({
    declarations: [PassengerDashboardModuleComponent, PassengerCounterComponent,
        PassengerComponent, addPassengerComponent, PassengerDeatilComponent, NotFoundComponent],
    imports: [CommonModule, FormsModule, AppRoutingModel],
    exports: [PassengerDashboardModuleComponent]
})

export class PassengerModule {}