import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { PassengerDashboardModuleComponent } from './containers/passenger-dashboard.component'
import { PassengerCounterComponent } from './components/counters/passenger-counter.component'
import { PassengerComponent} from './components/passenger/passenger.component'
import { addPassengerComponent } from './components/addPassenger/addPassenger.component'

@NgModule({
    declarations: [PassengerDashboardModuleComponent, PassengerCounterComponent, PassengerComponent, addPassengerComponent],
    imports: [CommonModule, FormsModule],
    exports: [PassengerDashboardModuleComponent]
})

export class PassengerModule {}