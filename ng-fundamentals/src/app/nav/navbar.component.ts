import { Component } from '@angular/core'
import { AuthService } from '../user/auth.service'

@Component({
    selector: 'nav-bar',
    templateUrl: './navbar.component.html', // Links to another file
    styles: [`
        .nav.navbar-nav {font-size: 15px;}
        #seachForm {margin-right: 100px;}
        @media (max-width: 1200px) {#searchForm {display:none}}
        li > a.active { color: #F97924; }
    `]
})
export class NavBarComponent {
    //this injects the service
    constructor(public authService) {
        
    }

}