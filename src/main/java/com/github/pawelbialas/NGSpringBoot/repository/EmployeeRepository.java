package com.github.pawelbialas.NGSpringBoot.repository;

import com.github.pawelbialas.NGSpringBoot.domain.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {


}
