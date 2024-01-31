package com.dojo.counter.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import jakarta.servlet.http.HttpSession;

@Controller
public class Counter {
	@GetMapping("/")
	public String display(HttpSession session) {
		// If the count is not already in session
				if (session.getAttribute("count") == null) {
				session.setAttribute("count", 0);
				}
				else {
				session.setAttribute ( "count", (int) session.getAttribute("count")+1);
				}
	
		return"index.jsp";
	}
	@GetMapping("/counter")
	public String displayCounter(HttpSession session) {
	
		
		return"display.jsp";
	}

}
