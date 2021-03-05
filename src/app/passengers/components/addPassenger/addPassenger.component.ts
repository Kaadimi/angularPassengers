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
    error: string = ''
    @Output() addEvent: EventEmitter<Passenger> = new EventEmitter()

    nameValidator(passenger: string): boolean {
        const nameRegex = /\w{3,25}/
        return nameRegex.test(passenger);
    }

    addPassenger(form: NgForm): void {
        if (this.nameValidator(form.value.fullName)) {
            this.addEvent.emit({id: 0, fullName: form.value.fullName, checkedIn: form.value.date ? true : false,  checkInDate: new Date(form.value.date).getTime(), children: this.children});
            this.children = [];
            this.error = ''
            form.reset()
        }
        else
            this.error = 'Passenger name can only contains alphanumeric charachters and between 3 and 25 in length.'
    }

    addChild(form: NgForm): void {
        if (this.nameValidator(form.value.childName))
        {
            const age = +form.value.childAge;
            console.log(age)
            if (age > 0 && age < 13) {
                this.children = [...this.children, {age, name: form.value.childName}];
                this.error = ''
                form.reset()
            }
            else
                this.error = 'Child must be younger than 13'
        }
        else
            this.error = 'Child name can only contains alphanumeric charachters and between 3 and 25 in length.'
    }

    todayDate() {
        return new Date().toISOString().split("T")[0]
    }

    closeDialog(msg: string): void {
        this.error = msg;
    }
}