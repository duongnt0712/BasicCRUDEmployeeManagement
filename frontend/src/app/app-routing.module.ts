import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CuEmployeeComponent } from './component/employee/cu-employee/cu-employee.component';
import { EmployeeDetailsComponent } from './component/employee/employee-details/employee-details.component';
import { EmployeeListComponent } from './component/employee/employee-list/employee-list.component';
import { EmployeeComponent } from './component/employee/employee.component';
import { CuTrainingComponent } from './component/training/cu-training/cu-training.component';
import { TrainingDetailsComponent } from './component/training/training-details/training-details.component';
import { TrainingListComponent } from './component/training/training-list/training-list.component';

const routes: Routes = [
    { path: '', redirectTo: 'employee', pathMatch: 'full'},
    { path: 'employee', component: EmployeeListComponent },
    { path: 'employee/add', component: CuEmployeeComponent},
    { path: 'employee/update/:id', component: CuEmployeeComponent},
    { path: 'employee/details/:id', component: EmployeeDetailsComponent},

    { path: 'training', component: TrainingListComponent },
    { path: 'training/add', component: CuTrainingComponent},
    { path: 'training/update/:id', component: CuTrainingComponent},
    { path: 'training/details/:id', component: TrainingDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
