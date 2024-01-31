package com.dojo.daikichiroutes.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("daikichi")
public class ApiController {

	@GetMapping()
	public String wel() {
		return"Welcome";
	}
	
	@GetMapping("today")
	public String tod() {
		return"Today you will find luck in all your endeavors!";
	}
	
	@GetMapping("tomorrow")
	public String tom() {
		return"Tomorrow,an opportunity will arise,so be sure to be open to new ideas!";
	}
	
}
