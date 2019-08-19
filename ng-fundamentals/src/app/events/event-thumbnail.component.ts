import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
    selector: 'event-thumbnail',
    template: `
    <div class="well hoverwell thumbnail">
        <!-- angular will lookin the EventsListComponent and expect to find an object called event 
        with the properties such as name, date and time */ -->
        <h2>{{event?.name}}</h2>
        <div>Date: {{event?.date}}</div>
        <div [ngStyle]="getStartTimeStyle()" [ngSwitch]="event?.time">
            Time: {{event?.time}}  
            <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
            <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
            <span *ngSwitchDefault>(Normal Start)</span>
        </div>
        <div>Price: \${{event?.price}}</div>
        <div *ngIf="event?.location">
            <span>Location: {{event?.location.address}}</span>
            <span class="pad-left">{{event?.location?.city}}, {{event?.location?.country}}</span>
        </div>
        <div *ngIf="event?.onlineUrl">
            Online URL: {{event?.onlineUrl}}
        </div>
    </div>
    `,
    styles: [`
        .green { color: #003300 !important; }
        .bold { font-weight: bold; }
        .thumbnail { min-height: 210px; }
        .pad-left { margin-left: 10px; }
        .well div {color: #bbb; }
    `]

    /* Line 18 creates a button with function name handleClickMe() which corresponds to the 
    EventThumbnailComponent component below */
})

export class EventThumbnailComponent {
    // This tells angular that event is going to be passed in by another component 
    // and it's type can any data type
    @Input() event:any
    /* someProperty:any = "some value"
    This is how you declare a child attribute to be accessed in the parent list component class */

    getStartTimeStyle() {
        /* Here if the event.time = 8am then an array is returned containing the names of the 
        classes assigned to the div, else it returns an empty array  */
        if (this.event && this.event.time === '8:00 am')
            return {color: '#003300', 'font-weight': 'bold'}
        return {}
    }
}