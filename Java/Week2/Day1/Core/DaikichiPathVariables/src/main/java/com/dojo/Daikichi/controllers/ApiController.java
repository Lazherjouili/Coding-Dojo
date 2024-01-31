package com.dojo.Daikichi.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("daikichi")
public class ApiController {
	
	@GetMapping("{V1}/{V2}")
	public String trav(@PathVariable("V1" ) String name,@PathVariable("V2" ) String name1) {
		return String.format("CongratulationS! You will soon %s to %s!", name,name1);
	}
	@GetMapping("lotto/{V3}")
	public String lot(@PathVariable("V3" ) int number) {
		if (number%2==0) {
			return "You will take a grand journey in the near future, but be weary of tempting offers";
		}else {
			return"You have enjoyed the fruits of your labor but now is a great time to spend time with family and friends.";
		}
	}

}
