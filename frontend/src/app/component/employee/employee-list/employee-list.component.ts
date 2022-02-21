import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, ConfirmEventType, MessageService } from 'primeng/api';
import { Observable } from 'rxjs';
import { LazyLoadEvent } from 'primeng/api';
import { Employee } from 'src/app/entity/employee';
import { EmployeeService } from 'src/app/service/employee.service';


@Component({
    selector: 'app-employee-list',
    templateUrl: './employee-list.component.html',
    styleUrls: ['./employee-list.component.css'],
    providers: [ConfirmationService, MessageService]
})
export class EmployeeListComponent {
    employees: Employee[];
    first = 0;
    rows = 5;
    pageNum = 1;
    maxPerPage: number;
    rowsPerPageOptions = [5,10,15];
    totalRecords: number;

    constructor(private employeeService: EmployeeService, private router: Router, 
        private confirmationService: ConfirmationService, private messageService: MessageService) { }

    // ngOnInit() {
    //     this.loadEmployeeList(this.pageNum);
    // }

    loadEmployees(event: any) {        
        this.pageNum = event.first/event.rows;
        this.loadEmployeeList(this.pageNum + 1);
    }

    loadEmployeeList(pageNum: number) {
        this.employeeService.getEmployeeListPage(pageNum, this.rows).subscribe(
            data => {
                this.employees = data.content;
                this.totalRecords = data.totalElements;
                console.log(this.employees);
                console.log(this.employees.length);
            }
        );
    }

    updateEmployee(id: number) {
        this.router.navigate(['/employee/update', id]);
    }

    deleteEmployee(id: number) {
        this.confirmationService.confirm({
            message: 'Are you sure that you want to proceed?',
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.employeeService.deleteEmployee(id).subscribe(data => {
                        this.loadEmployeeList(this.pageNum);
                });
                this.messageService.add({severity:'info', summary:'Confirmed', detail:'Deleted successfully!'});
            },
            reject: (type: any) => {
                switch(type) {
                    case ConfirmEventType.REJECT:
                        this.messageService.add({severity:'error', summary:'Rejected', detail:'You have rejected'});
                    break;
                    case ConfirmEventType.CANCEL:
                        this.messageService.add({severity:'warn', summary:'Cancelled', detail:'Deleted cancelled'});
                    break;
                }
            }
        });
    }
    
    goToEmployeeDetails(id: number) {
        this.router.navigate(['/employee/details', id]);
    }
}
