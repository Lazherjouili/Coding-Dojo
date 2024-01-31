package com.dojo.form.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import org.springframework.web.bind.annotation.RequestParam;

import jakarta.servlet.http.HttpSession;

@Controller
public class FormController {

		@GetMapping("/omikuji")
			public String form(){
			
			return"form.jsp";
		}
		@PostMapping("/process")
		public String process(@RequestParam("number") int number,
								@RequestParam("city") String city,
								@RequestParam("person") String person,
								@RequestParam("hobby") String hobby,
								@RequestParam("thing") String thing,
								@RequestParam("someone") String someone,HttpSession session){
				session.setAttribute("KeyNumber", number);
				session.setAttribute("KeyCity", city);
				session.setAttribute("KeyPerson", person);
				session.setAttribute("KeyHobby", hobby);
				session.setAttribute("KeyThing", thing);
				session.setAttribute("KeySomeone", someone);
		
			return "redirect:/omikuji/show";
		}
		@GetMapping("/omikuji/show")
		public String show(){
		
		return"show.jsp";
	}
		
}
