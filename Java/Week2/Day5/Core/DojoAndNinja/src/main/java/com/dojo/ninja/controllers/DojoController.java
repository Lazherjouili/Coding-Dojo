package com.dojo.ninja.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.dojo.ninja.models.Dojo;
import com.dojo.ninja.services.DojoService;
import com.dojo.ninja.services.NinjaService;

import jakarta.validation.Valid;

@Controller
@RequestMapping("dojos")
public class DojoController {
	

	// DI
		@Autowired
		private NinjaService ninjaServ;
		@Autowired
		private DojoService dojoServ;

	@GetMapping("new")
	public String create(@Valid @ModelAttribute("dojo") Dojo dojo,
			BindingResult result) {
		
		return"formDojo.jsp";
	}
	
	
	// Process Ninja
	@PostMapping("/processDojo")
	public String createBook(@Valid @ModelAttribute("dojo") Dojo dojo,
			BindingResult result) {
		if (result.hasErrors()) {
			
		
			return "formDojo.jsp";
		}else {
			Dojo newDojo = dojoServ.createDojo(dojo);
			return "redirect:/dojos/new";
		}
		
		
		
	}
	
	@GetMapping("/{id}")
	public String oneDojo(@PathVariable Long id,Model model) {
		
		Dojo savedDojo = dojoServ.findDojoById(id);
		model.addAttribute("dojo",savedDojo);
		return "show.jsp";
		
	}
}
