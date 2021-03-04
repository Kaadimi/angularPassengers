import { Component, Input } from '@angular/core'

@Component({
    selector: 'passenger-counter',
    templateUrl: './passenger-counter.component.html',
    styleUrls: ['./passenger-counter.component.css']
})

export class PassengerCounterComponent {
    @Input() nbOfPassengers: number;
    @Input() nbOfCheckedIn: number;

}