package com.dojo.burger.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.dojo.burger.models.Burger;
import com.dojo.burger.services.BurgerService;

import jakarta.validation.Valid;

@Controller
@RequestMapping("/burgers")
public class BurgerController {

	// DI
		@Autowired
		private BurgerService BurgerServ;
		
		// display all books
		@GetMapping("")
		public String home(@ModelAttribute("burger") Burger burger, Model model) {
			// retrieve all books from db
			List<Burger> allBurgers = BurgerServ.allBurgers();
			model.addAttribute("allBurgers",allBurgers);
			return "home.jsp";
		}
		
		// Process Book
		@PostMapping("/process")
		public String createBurger(@Valid @ModelAttribute("burger") Burger burger,
				BindingResult result,
				Model model) {
			if (result.hasErrors()) {
				// retrieve all books from db
				List<Burger> allBurgers = BurgerServ.allBurgers();
				model.addAttribute("allBurgers",allBurgers);
				return "home.jsp";
			}else {
				Burger newBurger = BurgerServ.createBurger(burger);
				return "redirect:/burgers";
			}
			
		}
		
		// Display Edit Form
		
		@GetMapping("/edit/{id}")
		public String getMethodName(Model model, @PathVariable("id") Long id) {
			// find the book by the id
			Burger selectedBurger = BurgerServ.findBurgerById(id);
			model.addAttribute("burger",selectedBurger);
			return "edit.jsp";
		}

		
		@PutMapping("/{id}")
		public String editBurger(@Valid @ModelAttribute("burger") Burger burger, BindingResult result) {
			
			if(result.hasErrors()) {
				return "edit.jsp";
			}else {
				// if there are no errors save the updated book to DB
				BurgerServ.updateBurger(burger);
			
				return "redirect:/burgers";
			}
		}
	
}
