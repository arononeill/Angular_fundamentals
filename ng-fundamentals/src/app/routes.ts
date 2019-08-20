import { Routes } from '@angular/router'
import { EventsListComponent } from './events/events-list.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { CreateEventComponent } from './events/create-event.component';
import { Error404Component } from './errors/404.component'
import { EventRouteActivator } from './events/event-details/event-route-activator.service'

export const appRoutes:Routes = [
    // Angular searches the routes in order and therefore 'events/new' has to be before 'events/:id'
    { path: 'events/new', component: CreateEventComponent},

    /* This route component tells angular to load the EventsListComponent whenever the url ends in 
    'events' wherever the route-outlet component is */
    { path: 'events', component: EventsListComponent},
    /* Here angular uses the individual ids of the event to display the eventDetailsComponent. The ':id'
    tells angular that id is a parameter and its being passed through the url. This will allow us to 
    access it in the component. */
    { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator] },

    {path: '404', component: Error404Component },
    /* when the path is empty or we're at the route of the site, then redirect to the '/events'. 
    Redirect routes need the pathMatch property which has 2 options, prefix or full. Prefix means redirect
    if the url starts with the specified path. 'Full' means redirect if it fully matches the specific path 
    string */
    { path: '', redirectTo: '/events', pathMatch: 'full' }
]