import { Routes } from '@angular/router'

import {
    EventsListComponent,
    EventDetailsComponent,
    CreateEventComponent,
    EventRouteActivator,
    EventListResolver
} from './events/index'
import { Error404Component } from './errors/404.component'

export const appRoutes:Routes = [
    // Angular searches the routes in order and therefore 'events/new' has to be before 'events/:id'
    { path: 'events/new', component: CreateEventComponent,
    /* This defines a function which then has to be added as a provider in the app.module. It will
    the user if they are sure that they want to cancel */
      canDeactivate: ['canDeactivateCreateEvent'] },

    /* This route component tells angular to load the EventsListComponent whenever the url ends in 
    'events' wherever the route-outlet component is.
    resolve is a handler and we're passing in an object which has a property, events and it's 
    property value is set to EventsListResolver 
    'events'here matches the proprty in the ngOnInit function in events-list.componment*/
    { path: 'events', component: EventsListComponent, resolve: 
        {events:EventListResolver} },
    /* Here angular uses the individual ids of the event to display the eventDetailsComponent. The 
    ':id' tells angular that id is a parameter and its being passed through the url. This will allow us to 
    access it in the component. Basically what this is saying is, before resolving this route, call
    this EventListResolver, when this EventListRevolver finishes andreturns with some data, add this
    data to the route which property name, events. So, its going to take the events returned from the
    resolver and put them in a property named events on the route
    */
    { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator] },

    {path: '404', component: Error404Component },
    /* when the path is empty or we're at the route of the site, then redirect to the '/events'. 
    Redirect routes need the pathMatch property which has 2 options, prefix or full. Prefix means redirect
    if the url starts with the specified path. 'Full' means redirect if it fully matches the specific path 
    string */
    { path: '', redirectTo: '/events', pathMatch: 'full' },
    /* So this is basically saying when a route starts with '/user', load the UserModule from 
    this path */
    { path: 'user', loadChildren: './user/user.module#UserModule' }
]