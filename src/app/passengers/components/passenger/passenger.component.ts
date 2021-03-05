import { Component, Output ,Input, OnInit, EventEmitter } from '@angular/core'
import { Location } from '@angular/common'

import { Passenger } from '../../../passenger'

@Component({
    selector: 'passenger-component',
    templateUrl: './passenger.component.html',
    styleUrls: ['./passenger.component.css']
})

export class PassengerComponent implements OnInit {
    @Input() passenger: any;
    @Input() i: number;
    @Output() editEvent: EventEmitter<Passenger> = new EventEmitter();
    @Output() removeEvent: EventEmitter<number> = new EventEmitter();
    edit: boolean = false;
    name: string = '';
    
    constructor(private location: Location) { }

    ngOnInit(): void {
      this.name = this.passenger ? this.passenger.fullName : ''
    }
  

    editField(): void {
        if (this.edit === true)
            this.editEvent.emit({...this.passenger, fullName: this.name});
        this.edit = !this.edit;
    }

    checkout(): void {
        this.editEvent.emit({...this.passenger, checkInDate: this.passenger.checkedIn ? null : Date.now(),   checkedIn: !this.passenger.checkedIn})
    }

    onInput(event): void {
        this.name = event.target.value;
    }

    delete(): void {
        this.removeEvent.emit(this.passenger.id)
    }
}