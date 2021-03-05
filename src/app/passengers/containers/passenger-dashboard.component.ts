import { Component, OnInit, OnDestroy } from '@angular/core'
import { PassengerService } from '../passenger.service';
import { Passenger } from '../../passenger'
import { Subscription } from 'rxjs';

@Component({
    selector: 'passenger-dashboard',
    templateUrl: './passenger-dashboard.component.html',
    styleUrls: ['./passenger-dashboard.component.css']
})

export class PassengerDashboardModuleComponent implements OnInit, OnDestroy {
    passengers: Passenger[] = [];
    passengerGetSubscription: Subscription;
    passengerDeleteSubscription: Subscription;
    passengerEditSubscription: Subscription;
    passengerAddSubscription: Subscription;

    constructor(private passengerService: PassengerService) {}

    ngOnInit() {
        this.passengerGetSubscription = this.passengerService.getPassengers().subscribe(passengers => this.passengers = passengers)
    }

    nbCheckedIn(passengers) {
        return passengers.filter(passenger => passenger.checkedIn).length
    }

    editPassenger(passenger: Passenger): void {
        this.passengerEditSubscription = this.passengerService.editPassenger(passenger).subscribe(() =>
            {
                this.passengers = this.passengers.map(el => {
                        if (el.id === passenger.id)
                            return passenger;
                        return el;
                    })
            },
            error => console.log(error),
            () => this.passengerEditSubscription.unsubscribe()
        );
    }

    deletePassenger(id: number): void {
        this.passengerDeleteSubscription = this.passengerService.deletePassenger(id).subscribe(() =>
            this.passengers = this.passengers.filter(el => el.id !== id),
            error => console.log(error),
            () => this.passengerDeleteSubscription.unsubscribe()
        ); 
    }

    uniqueId() {
        const len = this.passengers.length + 1
        for (let i = 0; i <= len; i++)
        {
            if (!this.passengers.some(el => el.id === i))
                return i;
        }
    }

    addPassenger(passenger: Passenger): void {
        this.passengerAddSubscription = this.passengerService.addPassenger({...passenger, id: this.uniqueId()}).subscribe(() =>
            this.passengers = [...this.passengers, passenger],
            error => console.log(error),
            () => this.passengerAddSubscription.unsubscribe())
    }

    ngOnDestroy(): void {
        this.passengerGetSubscription.unsubscribe();
    }
}