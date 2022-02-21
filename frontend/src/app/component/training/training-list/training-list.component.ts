import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, ConfirmEventType, MessageService } from 'primeng/api';
import { Training } from 'src/app/entity/training';
import { TrainingService } from 'src/app/service/training.service';

@Component({
    selector: 'app-training-list',
    templateUrl: './training-list.component.html',
    styleUrls: ['./training-list.component.css'],
    providers: [ConfirmationService, MessageService]
})
export class TrainingListComponent implements OnInit {

    trainings: Training[];
    first = 0;
    rows = 5;
    pageNum = 1;
    maxPerPage: number;
    rowsPerPageOptions = [5, 10, 15];
    totalRecords: number;
    constructor(private trainingService: TrainingService, private router : Router,
        private confirmationService: ConfirmationService, private messageService: MessageService) { }

    ngOnInit(): void {

    }

    loadTrainings(event: any) {
        this.loadTrainingList();
    }

    loadTrainingList() {
        this.trainingService.getTrainingList().subscribe(
            data => {
                this.trainings = data;
                this.totalRecords = data.length;
            }
        )
    }

    onSearch(event: any) {
        console.log(event);
        if(event == null || event == '') {
            this.loadTrainingList();
        } else {
            console.log(event);
            this.trainingService.getTrainingListByName(event).subscribe(
                data => {
                    this.trainings = data;
                    console.log(data);
                }
            )
        }
    }

    updateTraining(id: number) {
        this.router.navigate(['/training/update', id])
    }

    deleteTraining(id: number) {
        this.confirmationService.confirm({
            message: 'Are you sure that you want to proceed?',
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.trainingService.deleteTraining(id).subscribe(data => {
                        this.loadTrainingList();
                });
                this.messageService.add({severity:'info', summary:'Confirmed', detail:'Deleted successfully!'});
            }
        });
    }

    goToTrainingDetails(id: number) {
        this.router.navigate(['/training/details', id]);
    }

}
