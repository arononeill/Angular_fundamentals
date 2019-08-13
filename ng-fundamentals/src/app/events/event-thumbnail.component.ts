import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
    selector: 'event-thumbnail',
    template: `
    <div class="well hoverwell thumbernail">
        <!-- angular will lookin the EventsListComponent and expect to find an object called event 
        with the properties such as name, date and time */ -->
        <h2>{{event.name}}</h2>
        <div>Date: {{event.date}}</div>
        <div>Price: {{event.time}}</div> 
        <div>Price: \${{event.price}}</div>
        <div>
            <span>Location: {{event.location.address}}</span>
            <span class="pad-left">{{event.location.city}}, {{event.location.country}}</span>
        </div>
    </div> 
    `,
    styles: [`
        .thumbnail { min-height: 500px; }
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
}