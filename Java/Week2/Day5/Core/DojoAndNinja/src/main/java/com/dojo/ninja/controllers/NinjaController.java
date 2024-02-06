package com.dojo.ninja.controllers;

import java.awt.print.Book;
import java.util.List;
import java.util.concurrent.Flow.Publisher;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.dojo.ninja.models.Dojo;
import com.dojo.ninja.models.Ninja;
import com.dojo.ninja.services.DojoService;
import com.dojo.ninja.services.NinjaService;

import jakarta.validation.Valid;

@Controller
@RequestMapping("/ninjas")
public class NinjaController {

	
	// DI
		@Autowired
		private NinjaService ninjaServ;
		@Autowired
		private DojoService dojoServ;
		
		
		
		// display all books
		@GetMapping("")
		public String home(@ModelAttribute("ninja") Ninja ninja, Model model) {
			// retrieve all books from db
			List<Ninja> allNinjas = ninjaServ.allNinjas();
			model.addAttribute("allNinjas",allNinjas);
			// retrieve all publishers from db
			List<Dojo> allDojos = dojoServ.allDojos();
			model.addAttribute("allDojos", allDojos);
			return "home.jsp";
		}
		
		// display form ninja
		@GetMapping("/new")
		public String create(@Valid @ModelAttribute("ninja") Ninja ninja,
				BindingResult result,Model model) {
			List<Dojo> allDojos = dojoServ.allDojos();
			model.addAttribute("allDojos", allDojos);
			return "form.jsp";
		}
		
		
		
		
		// Process Ninja
		@PostMapping("/processNinja")
		public String createBook(@Valid @ModelAttribute("ninja") Ninja ninja,
				BindingResult result,
				Model model) {
			if (result.hasErrors()) {
				
				// retrieve all dojos from db
				List<Dojo> allDojos = dojoServ.allDojos();
				model.addAttribute("allDojos", allDojos);
				return "form.jsp";
			}else {
				Ninja newNinja = ninjaServ.createNinja(ninja);
				return "redirect:/ninjas/new";
			}
			
		}
		
		
		
		
}
