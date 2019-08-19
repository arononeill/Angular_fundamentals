import { Component } from '@angular/core'
import { EventService } from '../shared/event.service'
import { ActivatedRoute } from '@angular/router'

@Component({
    templateUrl: './event-details.component.html',
    styles: [`
        .container { padding-left: 20px; padding-right: 20px;}
        .event-image { height: 100px; }
    `]
})

export class EventDetailsComponent {
    event:any // Has to be declared as a property for angular to read it in the ngOnInit()
    
    constructor (private eventService:EventService, private route:ActivatedRoute) {

    }

    ngOnInit() {
        /* This gives us the parameters that were used to access this component. This is used in order to
        get the id at the end of the url. The '+' casts it to a number as getEvent() requires a number */
        this.event = this.eventService.getEvent(+this.route.snapshot.params['id'])
    }

}