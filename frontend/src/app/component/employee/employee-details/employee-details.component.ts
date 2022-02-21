import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/entity/employee';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
    selector: 'app-employee-details',
    templateUrl: './employee-details.component.html',
    styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

    id: number;
    employee: Employee = new Employee();
    constructor(private employeeService: EmployeeService, private route: ActivatedRoute, private router: Router) { }

    ngOnInit(): void {
        this.id = this.route.snapshot.params['id'];
        this.employeeService.getEmployeeById(this.id).subscribe(data => {
            console.log(data);
            this.employee = data;
        });
    }

    goToEmployeeList() {
        this.router.navigate(['/employee']);

    }

}
