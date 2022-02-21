package com.aht.angularApi.service;

import com.aht.angularApi.model.Employee;
import com.aht.angularApi.model.Training;
import com.aht.angularApi.repository.TrainingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TrainingService {
    @Autowired
    TrainingRepository trainingRepository;

    public Training getById(int id){
        return trainingRepository.findById(id);
    }

    public List<Training> getAll(){
        return trainingRepository.findAll();
    }

    public Page<Training> getTrainingByPage(int pageNum, int pageSize) {
        Pageable pageable = PageRequest.of(pageNum - 1, pageSize, Sort.by("id").descending());
        return trainingRepository.findAll(pageable);
    }

    public List<Training> getAllByName(String keyword) {
        return trainingRepository.findByNameLike("%" + keyword + "%");
    }

    public void add(Training training){
        trainingRepository.save(training);
    }

    public void addMulti(List<Training> trainings){
        trainingRepository.saveAll(trainings);
    }

    public void removeTraining(int id){
        trainingRepository.deleteById(id);
    }

    public void clear(){
        trainingRepository.deleteAll();
    }

    public void update(int id,Training training){
        training.setId(id);
        trainingRepository.save(training);
    }

}
