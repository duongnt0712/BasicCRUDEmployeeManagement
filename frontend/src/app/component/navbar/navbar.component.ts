import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

    items: MenuItem[];

    ngOnInit(): void {
        this.items = [
            {
                label: 'Employee',
                icon: 'pi pi-user',  
                routerLink: 'employee',           
            },
            {
                label: 'Training',
                icon: 'pi pi-book',
                routerLink: 'training'
            }
        ]
    }
}
