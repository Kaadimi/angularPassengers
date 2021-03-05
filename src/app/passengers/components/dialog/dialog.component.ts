import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
    selector: 'dialog-component',
    templateUrl: 'dialog.component.html',
    styleUrls: ['dialog.component.css']
})

export class DialogComponent {
    @Input() message: string;
    @Output() close: EventEmitter<string> = new EventEmitter();

    closeDialog(): void {
        console.log("close")
        this.close.emit("")
    }
}