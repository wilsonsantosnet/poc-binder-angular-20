import { Directive, ElementRef, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { NgModel } from '@angular/forms';

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[caller]',
    providers: [NgModel]
})

// tslint:disable-next-line:directive-class-suffix
export class CallerDiretive implements OnInit {

    // tslint:disable-next-line:no-input-rename
    @Output() caller: EventEmitter<any> = new EventEmitter<any>();
    constructor() {
    }

    ngOnInit() {
        this.caller.emit();
    }

}
