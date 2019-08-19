import { Component, OnInit } from '@angular/core'
import { EventService } from './shared/event.service';
import { toBase64String } from '@angular/compiler/src/output/source_map';
import { ToastrService } from '../common/toastr.service'

declare let toastr

@Component({
    /* This is how you reference a html page instead of putting in all the code here
    templateUrl: './events-list.component.html' */
    template: `
    <div>
        <h1>Upcoming Angular Events</h1>
        <hr>
        <div class="row">
        
            <div *ngFor="let event of events" class="col-md-5">
                <event-thumbnail (click)="handleThumbnailClick(event.name)" [event]="event"></event-thumbnail>
            </div>
        </div>
    </div>
    `


    /* "*ngFor="let event of events" - here we're telling angular to use the array called events and for each 
    element in the array *ngFor is going to duplicate the event-thumbnail element and assign the 
    value of each array element to each thumbnail element. Here we are looping over all of the events.
    
    <h3>{{thumbnail}}.someProperty}}</h3> is how you access a child component attribute
    
    <event-thumbnail #thumbnail [event]="event1"></event-thumbnail>
    #thumbnail links to the thumbnail component

    Basically, when the eventClick event is fired on the event-thumbernail component, call the 
    "handleEventCLicked()" method on my component.
    The $event refers to the data emitted with our event (in this case, the string testing) */
})

export class EventsListComponent implements OnInit {
    /* This injects the eventService found in the event.service.ts file. Angular knows where to
    find this as EventService was added to the applicationCache.module */
    events:any[] // This is an events variable of any type.

    // the toastr parameter here allows us to inject the toastr service
    constructor(private eventService: EventService, private toastr: ToastrService) {
      
    }

    ngOnInit() {
      this.events = this.eventService.getEvents()
    }

    // Here, we are injecting the toastr service
    handleThumbnailClick(eventName) {
        this.toastr.success(eventName)
    }
}