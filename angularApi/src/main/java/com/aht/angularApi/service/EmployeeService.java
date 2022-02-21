package com.aht.angularApi.service;

import com.aht.angularApi.model.Employee;
import com.aht.angularApi.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmployeeService {

    @Autowired
    EmployeeRepository employeeRepository;

    public List<Employee> getAllEmployee(){
        return (List<Employee>) employeeRepository.findAll();
    }

    public Employee getEmployeeById(int id){
        return employeeRepository.findById(id);
    }

    public Page<Employee> getEmployeeByPage(int pageNum, int pageSize) {
        Pageable pageable = PageRequest.of(pageNum - 1, pageSize, Sort.by("id").descending());
        return employeeRepository.findAll(pageable);
    }

    public void addEmp(Employee employee){
        employeeRepository.save(employee);
    }

    public void addEmps(List<Employee> emps){
        employeeRepository.saveAll(emps);
    }

    public void removeEmp(int id){
        employeeRepository.deleteById(id);
    }

    public void clear(){
        employeeRepository.deleteAll();
    }

    public void updateEmp(int id, Employee employee){
        employee.setId(id);
        employeeRepository.save(employee);
    }


}
