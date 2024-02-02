package com.dojo.travels.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.dojo.travels.models.Expense;
@Repository
public interface ExpenseRepository extends CrudRepository<Expense, Long> {
	// Find ALL EXPENSES
List<Expense>  findAll();



}
