import { Component, Output, EventEmitter } from '@angular/core'
import { NgForm } from '@angular/forms';

import { Child, Passenger } from '../../../passenger'

@Component({
    selector: 'add-passenger',
    templateUrl: './addPassenger.component.html',
    styleUrls: ['./addPassenger.component.css']
})

export class addPassengerComponent {
    children: Child[] = []
    name: string = ''
    @Output() addEvent: EventEmitter<Passenger> = new EventEmitter()

    addPassenger(form: NgForm): void {
        this.addEvent.emit({id: 0, fullName: form.value.passenger, checkedIn: true,  checkInDate: new Date(form.value.date).getTime(), children: this.children});
        this.children = [];
        form.reset()
    }

    addChild(form: NgForm): void {
        this.children = [...this.children, {id: this.children.length, name: form.value.childName}];
        form.reset();
    }

    todayDate() {
        return new Date().toISOString().split("T")[0]
    }
}