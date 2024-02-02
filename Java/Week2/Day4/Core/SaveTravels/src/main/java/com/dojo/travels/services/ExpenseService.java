package com.dojo.travels.services;

import java.awt.print.Expense;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dojo.travels.models.Expense;
import com.dojo.travels.repositories.ExpenseRepository;

@Service
public class ExpenseService {
	
	// Business LOGIC
		// C R U D
		
		// DI
		@Autowired
		private ExpenseRepository expenseRepo;
		
		// READ ALL
		public List<Expense> allExpenses(){
			return expenseRepo.findAll();
		}
		
		// CREATE
		public Expense createExpense(Expense b) {
			return expenseRepo.save(b);
		}
		
		
		// READ ONE
		public Expense findExpenseById(Long id) {
			Optional<Expense> maybeExpense = expenseRepo.findById(id);
			if(maybeExpense.isPresent()) {
				return maybeExpense.get();
			}else {
				return null;
			}
		}
		
		// UPDATE
		public Expense updateExpense(Expense b) {
			return expenseRepo.save(b);
		}
		
		// DELETE
		public void deleteExpense(Long id) {
			expenseRepo.deleteById(id);
		}
		
	

}
