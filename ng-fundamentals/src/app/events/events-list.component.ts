import { Component } from '@angular/core'

@Component({
    selector: 'events-list',
    /* This is how you refernce a html page instead of putting in all the code here
    templateUrl: './events-list.component.html' */
    template: `
    <div>
        <h1>Upcoming Angular Events</h1>
        <hr>
        <event-thumbnail [event]="event1"></event-thumbnail>
    </div>
    `
    /* Basically, when the eventClick event is fired on the event-thumbernail component, call the 
    "handleEventCLicked()" method on my component.
    The $event refers to the data emitted with our event (in this case, the string testing) */
})

export class EventsListComponent {
    event1 = {
        id: 1,
        name: 'Angular Connect',
        date: '9/26/2036',
        time: '10:00am',
        price: 599.99,
        imageUrl: '/assets/images/angularconnect-shield.png',
        location: {
            address: '1057 DT',
            city: 'London',
            country: 'England'
        }
    }
}