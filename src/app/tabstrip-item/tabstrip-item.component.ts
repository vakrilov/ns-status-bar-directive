import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
    selector: "tb-tabstrip-item",
    templateUrl: "tabstrip-item.component.html"
})
export class TabstripItemComponent  {
    @Input() id: string;
    @Input() col: number;
    @Input() text: string;
    @Input() icon: string;
    @Output() itemTap: EventEmitter<Event> = new EventEmitter<Event>();

    constructor() {

    }

    onTap(args) {
        args.object.id = this.id;
        this.itemTap.emit(args);
    }
}
