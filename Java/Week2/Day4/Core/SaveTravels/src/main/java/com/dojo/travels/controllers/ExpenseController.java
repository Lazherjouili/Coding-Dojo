package com.dojo.travels.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.dojo.books.models.Book;
import com.dojo.travels.models.Expense;
import com.dojo.travels.services.ExpenseService;

import jakarta.validation.Valid;

@Controller
@RequestMapping("/expenses")
public class ExpenseController {
	
	
	// DI
		@Autowired
		private ExpenseService expenseServ;

		// display all expenses
		@GetMapping("")
		public String home(@ModelAttribute("expense") Expense expense, Model model) {
			// retrieve all expenses from db
			List<Expense> allExpenses = expenseServ.allExpenses();
			model.addAttribute("allExpenses",allExpenses);
			return "home.jsp";
		}
		//display one expense
		@GetMapping("/{id}")
		public String findOneExpenseById(@PathVariable("id") Long id, Model model) {
			Expense selectedExpense = expenseServ.findExpenseById(id);
			model.addAttribute("expense",selectedExpense);
			return "show.jsp";
		}
		// Process Expense
		@PostMapping("/process")
		public String createExpense(@Valid @ModelAttribute("expense") Expense expense,
				BindingResult result,
				Model model) {
			if (result.hasErrors()) {
				// retrieve all expenses from db
				List<Expense> allExpenses = expenseServ.allExpenses();
				model.addAttribute("allExpenses",allExpenses);
				return "home.jsp";
			}else {
				Expense newExpense = expenseServ.createExpense(expense);
				return "redirect:/expenses";
			}
			
		}
		
		@DeleteMapping("/{id}")
		public String deleteExpense(@PathVariable("id") Long id) {
			
			expenseServ.deleteExpense(id);
			
			return "redirect:/expenses";
		}
		
		
		// Display Edit Form
		
		@GetMapping("/edit/{id}")
		public String getMethodName(Model model, @PathVariable("id") Long id) {
			// find the expense by the id
			Expense selectedExpense = expenseServ.findExpenseById(id);
			model.addAttribute("expense",selectedExpense);
			return "edit.jsp";
		}
		
		@PutMapping("/{id}")
		public String editExpense(@Valid @ModelAttribute("expense") Expense expense, BindingResult result) {
			
			if(result.hasErrors()) {
				return "edit.jsp";
			}else {
				// if there are no errors save the updated expense to DB
				expenseServ.updateExpense(expense);
			
				return "redirect:/expenses";
			}
		}

}
