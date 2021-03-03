package com.github.pawelbialas.NGSpringBoot.service;

import com.github.pawelbialas.NGSpringBoot.domain.Employee;
import com.github.pawelbialas.NGSpringBoot.exception.UserNotFountException;
import com.github.pawelbialas.NGSpringBoot.repository.EmployeeRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class EmployeeService {

    private final EmployeeRepository repository;


    public EmployeeService(EmployeeRepository repository) {
        this.repository = repository;
    }

    public Employee addEmployee(Employee employee) {
        employee.setEmployeeCode(UUID.randomUUID().toString());
        employee.setEmail(employee.getFirstName().toLowerCase() + "." + employee.getLastName().toLowerCase() + "@supercorp.com");
        return repository.save(employee);

    }

    public List<Employee> findAllEmployees () {
        return repository.findAll();
    }

    public Employee findById(Long id){
        return repository.findById(id)
                .orElseThrow(() -> new UserNotFountException("user with id: " + id + " was not found"));
    }

    public Employee updateEmployee(Employee employee) {
        employee.setEmail(employee.getFirstName().toLowerCase() + "." + employee.getLastName().toLowerCase() + "@supercorp.com");
        return repository.save(employee);
    }

    public void deleteEmployee(Long id) {
        repository.deleteById(id);
    }
}
