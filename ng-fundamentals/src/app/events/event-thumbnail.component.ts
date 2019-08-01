import { Component, Input, Output } from '@angular/core'
import { EventEmitter } from 'protractor';

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
            <span>&nbsp;</span>
            <span>{{event.location.city}}, {{event.location.country}}</span>
        </div>
        
    </div> 
    `
})

export class EventThumbnailComponent {
    // This tells angular that event is going to be passed in by another component 
    // and it's type can any data type
    @Input() event:any  
    
}