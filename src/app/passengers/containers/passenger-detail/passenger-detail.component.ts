import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Location } from '@angular/common'

import { PassengerService } from '../../passenger.service'
import { Passenger } from '../../../passenger'

@Component({
    selector: 'passenger-detail',
    templateUrl: './passenger-detail.component.html',
    styleUrls: ['./passenger-detail.component.css']
})

export class PassengerDeatilComponent implements OnInit {
    passenger: Passenger;
    error: boolean = false;

    constructor(private route: ActivatedRoute, private passengerService: PassengerService, private location: Location) {}

    ngOnInit() {
        const passengerId = this.route.snapshot.params.id
        this.passengerService.getPassenger(passengerId).subscribe(passenger => this.passenger = passenger, error => {this.error = true;console.log(error)})
    }

    goBack() {
        this.location.back()
    }
}