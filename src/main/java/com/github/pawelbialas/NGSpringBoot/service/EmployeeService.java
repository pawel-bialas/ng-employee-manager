package com.github.pawelbialas.NGSpringBoot.service;

import com.github.pawelbialas.NGSpringBoot.domain.Employee;
import com.github.pawelbialas.NGSpringBoot.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class EmployeeService {

    private final EmployeeRepository repository;


    public EmployeeService(EmployeeRepository repository) {
        this.repository = repository;
    }

    public Employee addEmployee(Employee employee) {
        employee.setEmployeeCode(UUID.randomUUID().toString());
        return repository.save(employee);

    }
}
