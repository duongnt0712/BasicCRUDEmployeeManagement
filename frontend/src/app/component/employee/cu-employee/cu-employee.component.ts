import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/entity/employee';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-cu-employee',
  templateUrl: './cu-employee.component.html',
  styleUrls: ['./cu-employee.component.css']
})
export class CuEmployeeComponent implements OnInit {
    employeeFormGroup: FormGroup;
    id: number;
    employee: Employee = new Employee();
    genderList: any[];
    typeList: any[];
    selectedGender: number;
    selectedType: number;
    title: string;

    constructor( private formBuilder: FormBuilder, private employeeService: EmployeeService, private router: Router, private route: ActivatedRoute) { 
    }

    ngOnInit(): void { 
        this.employeeFormGroup = this.formBuilder.group({
            name: new FormControl(''),
            dob: new FormControl(''),
            sex: new FormControl(''),
            numberInsurance: new FormControl(''),
            address: new FormControl(''),
            phone: new FormControl(''),
            type: new FormControl('')
        });

        this.employee = new Employee();
        this.id = this.route.snapshot.params['id'];

        if(this.id != null) {
            this.title = 'Update';
            this.employeeService.getEmployeeById(this.id).subscribe(
                data => {
                    this.employee = data;
                    this.selectedGender = data.sex;
                    this.selectedType = data.type;
                }
            );
        } else {
            this.title = 'Create New';
        }
        
        this.genderList = [
            { name : 'Male', code: 0 },
            { name : 'Female', code: 1 }
        ];
        this.typeList = [
            { name : 'Full-time', code : 1 },
            { name : 'Part-time', code : 2 }
        ];
    }

    addEmployee() {
        this.employeeService.createEmployee(this.employeeFormGroup.value).subscribe(data => {
            console.log(data);
            this.goToEmployeeList();
        });
    }

    updateEmployee() {
        this.employeeService.updateEmployee(this.id, this.employee).subscribe(data => {
            console.log(data);
            this.employee = new Employee();
            this.goToEmployeeList();
        });
    }

    goToEmployeeList() {
        this.router.navigate(['/employee']);
    }
}
