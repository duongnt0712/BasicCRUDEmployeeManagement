import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Training } from 'src/app/entity/training';
import { TrainingService } from 'src/app/service/training.service';

@Component({
    selector: 'app-cu-training',
    templateUrl: './cu-training.component.html',
    styleUrls: ['./cu-training.component.css']
})
export class CuTrainingComponent implements OnInit {
    trainingFormGroup: FormGroup;
    title: string;
    training: Training;
    id: number;
    statusList: any[];
    selectedStatus: number;

    constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router, 
        private trainingService: TrainingService) { }

    ngOnInit(): void {
        this.trainingFormGroup = this.formBuilder.group({
            code: new FormControl(''),
            name: new FormControl(''),
            startDate: new FormControl(''),
            endDate: new FormControl(''),
            status: new FormControl('')
        });

        this.training = new Training();
        this.id = this.route.snapshot.params['id'];

        if(this.id != null) {
            this.title = 'Update';
            this.trainingService.getTrainingById(this.id).subscribe(
                data => {
                    this.training = data;
                    this.selectedStatus = data.status;
                    console.log(data.startDate);
                    console.log(data.endDate);
                }
            );
        } else {
            this.title = 'Create New';
        }

        this.statusList = [
            { name : 'In Coming', code: 0 },
            { name : 'In Progress', code: 1 },
            { name : 'Done', code: 2 }
        ];
    }

    addTraining() {
        this.trainingService.createTraining(this.trainingFormGroup.value).subscribe(data => {
            console.log(data);
            this.goToTrainingList();
        });
    }

    updateTraining() {
        this.trainingService.updateTraining(this.id, this.training).subscribe(data => {
            console.log(data)
            this.training = new Training();
            this.goToTrainingList();
        });
    }

    goToTrainingList() {
        this.router.navigate(['/training'])
    }
}
