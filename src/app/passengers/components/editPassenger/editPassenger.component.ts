import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router'
import { Location } from '@angular/common'

import { PassengerService } from '../../passenger.service'
import { Child, Passenger } from '../../../passenger';

@Component({
    selector: 'edit-passenger',
    templateUrl: './editPassenger.component.html',
    styleUrls: ['./editPassenger.component.css']
})

export class editPassengerComponent implements OnInit {
    children: Child[] = []
    name: string = ''
    error: string = ''
    passenger: Passenger = {id: 0, fullName: "", checkedIn: false, checkInDate: +(new Date()), children: []};

    constructor(private userService: PassengerService, private route: ActivatedRoute, private location: Location) {}

    ngOnInit() {
        const id = this.route.snapshot.params.id;
        this.userService.getPassenger(id).subscribe(passenger => this.passenger = passenger, error => this.location.back());
    }

    editPassenger(form: NgForm): void {
        console.log(form.value)
        form.value.checkInDate = new Date(form.value.checkInDate).getTime() 
        this.userService.editPassenger(Object.assign({}, this.passenger, form.value)).subscribe(res => this.location.back());
        // this.children = [];
        // this.error = ''
        // form.reset()
    }

    addChild(form: NgForm): void {
        const age = +form.value.childAge;
        this.children = [...this.children, {age, name: form.value.childName}];
        this.error = ''
        form.reset()
    }

    todayDate(date: number) {
        return new Date(date).toISOString().split("T")[0]
    }

    closeDialog(msg: string): void {
        this.error = msg;
    }

    checkInHandle(checkedIn): void {
        this.passenger.checkedIn = checkedIn;
    }

    checkInDateHandle(date): void {
        this.passenger.checkInDate = new Date(date).getTime();
    }
}