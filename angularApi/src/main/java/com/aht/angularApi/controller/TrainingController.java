package com.aht.angularApi.controller;

import com.aht.angularApi.model.Training;
import com.aht.angularApi.service.TrainingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class TrainingController {

    @Autowired
    TrainingService trainingService;

    @GetMapping("/training")
    public ResponseEntity getAll(){
        return new ResponseEntity(trainingService.getAll(), HttpStatus.OK);
    }

    @GetMapping("/training/{id}")
    public ResponseEntity getById(@PathVariable int id){
        return new ResponseEntity(trainingService.getById(id),HttpStatus.OK);
    }

    @GetMapping("/training/pages/{id}")
    public ResponseEntity getEmpPage(@PathVariable int id, @RequestParam("maxPerPage") int maxPerPage){
        Page<Training> trainings = trainingService.getTrainingByPage(id, maxPerPage);
        return new ResponseEntity(trainings, HttpStatus.OK);
    }

    @GetMapping("/training/search")
    public ResponseEntity searchByName(@RequestParam("keyword") String keyword) {
        return new ResponseEntity(trainingService.getAllByName(keyword), HttpStatus.OK);
    }

    @PostMapping("/training")
    public ResponseEntity addTraining(@RequestBody Training training){
        trainingService.add(training);
        return new ResponseEntity("Added!",HttpStatus.CREATED);
    }

    @PostMapping("/training/multi")
    public ResponseEntity addTraining(@RequestBody List<Training> trainings){
        trainingService.addMulti(trainings);
        return new ResponseEntity("Added "+trainings.size()+" training!",HttpStatus.CREATED);
    }

    @PutMapping("/training/{id}")
    public ResponseEntity update(@PathVariable int id,@RequestBody Training training){
        trainingService.update(id,training);
        return new ResponseEntity("Updated!",HttpStatus.OK);
    }

    @DeleteMapping("/training/{id}")
    public ResponseEntity delete(@PathVariable("id")int id){
        trainingService.removeTraining(id);
        return new ResponseEntity("Deleted!",HttpStatus.OK);
    }
}
