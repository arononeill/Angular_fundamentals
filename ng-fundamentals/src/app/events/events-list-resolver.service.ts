import { Injectable } from '@angular/core'
import { Resolve } from '@angular/router'
import { EventService } from './shared/event.service'
import { map } from 'rxjs/operators'

@Injectable()
export class EventListResolver implements Resolve<any> {
    constructor(private eventService:EventService) {

    }

    resolve() {
        /* Here, we're calling getEvents() which returns an observable then we're calling map on
        that observable which gives us access to the events being passed in, then we are just 
        returning the events.
        subscribe() returns a subscription and not an observable. Hence, we use map which
        essentially does the same thing but only returns an obsevable*/
        return this.eventService.getEvents().pipe(map(events => events))
    }
}

/* The resolver gets the events from the events service, the route takes that and puts it on the 
route then we can access it in our events-list component (through the ngOnInit function) */
