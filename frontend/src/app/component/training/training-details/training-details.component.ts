import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Training } from 'src/app/entity/training';
import { TrainingService } from 'src/app/service/training.service';

@Component({
    selector: 'app-training-details',
    templateUrl: './training-details.component.html',
    styleUrls: ['./training-details.component.css']
})
export class TrainingDetailsComponent implements OnInit {

    id: number;
    training: Training = new Training();
    constructor(private trainingService: TrainingService, private route: ActivatedRoute, private router: Router) { }

    ngOnInit(): void {
        this.id = this.route.snapshot.params['id'];
        this.trainingService.getTrainingById(this.id).subscribe(data => {
            console.log(data);
            this.training = data;
        });
    }

    goToTrainingList() {
        this.router.navigate(['/training']);

    }

}
