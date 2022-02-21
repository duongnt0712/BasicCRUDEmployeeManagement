import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MenubarModule} from 'primeng/menubar';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import {DropdownModule} from 'primeng/dropdown';
import {CalendarModule} from 'primeng/calendar';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ScrollTopModule} from 'primeng/scrolltop';
import {ToastModule} from 'primeng/toast';
import {ToolbarModule} from 'primeng/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { EmployeeListComponent } from './component/employee/employee-list/employee-list.component';
// import { AddEmployeeComponent } from './component/employee/add-employee/add-employee.component';
// import { UpdateEmployeeComponent } from './component/employee/update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './component/employee/employee-details/employee-details.component';
import { DdMmYYYYDatePipe } from './utils/dd-mm-yyyy-date.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CuEmployeeComponent } from './component/employee/cu-employee/cu-employee.component';
import { EmployeeComponent } from './component/employee/employee.component';
import { SearchPipe } from './utils/search.pipe';
import { TrainingListComponent } from './component/training/training-list/training-list.component';
import { CuTrainingComponent } from './component/training/cu-training/cu-training.component';
import { TrainingDetailsComponent } from './component/training/training-details/training-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EmployeeListComponent,
    // AddEmployeeComponent,
    // UpdateEmployeeComponent,
    EmployeeDetailsComponent,
    DdMmYYYYDatePipe,
    CuEmployeeComponent,
    EmployeeComponent,
    SearchPipe,
    TrainingListComponent,
    CuTrainingComponent,
    TrainingDetailsComponent
  ],
  imports: [
    BrowserModule,
    MenubarModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    DropdownModule,
    CalendarModule,
    ConfirmDialogModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ScrollTopModule,
    ToolbarModule,
    AppRoutingModule,
    ToastModule,
    NgbModule   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
