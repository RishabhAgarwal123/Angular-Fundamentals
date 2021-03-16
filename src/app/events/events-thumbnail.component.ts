import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'event-thumbnail',
    templateUrl: '/events-thumbnail.component.html',
    styles: [`div {color: black}`] 
})
export class EventsThumbnailComponent {
    @Input() events: any;
    @Output() eventClick = new EventEmitter();

    handleClick() {
        this.eventClick.emit(this.events);
    }
    handleRefs() {
        console.log("Refs");
    }
}