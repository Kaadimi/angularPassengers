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
import { DialogComponent } from '../passengers/components/dialog/dialog.component'
import { editPassengerComponent } from './components/editPassenger/editPassenger.component'

@NgModule({
    declarations: [PassengerDashboardModuleComponent, PassengerCounterComponent,
        PassengerComponent, addPassengerComponent, PassengerDeatilComponent,
        NotFoundComponent, DialogComponent, editPassengerComponent],
    imports: [CommonModule, FormsModule, AppRoutingModel],
    exports: [PassengerDashboardModuleComponent]
})

export class PassengerModule {}