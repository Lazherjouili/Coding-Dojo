package com.dojo.Human.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ApiController {
@GetMapping("/")
public String human(@RequestParam(value="name", required=false) String name,@RequestParam(value="last_name", required=false) String last_name) {
	if(name==null) {
		return"Hello Human";
	}else {
		return "Hello "+name+" "+last_name;
	}
	
}
}
