package com.dojo.lookify.controllers;

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

import com.dojo.lookify.models.Song;
import com.dojo.lookify.services.SongService;

import jakarta.validation.Valid;

@Controller
public class SongController {

	
	@Autowired
	private  SongService songser;
	
	
	@GetMapping("")
	public String home() {
		return "index.jsp";
	}
	@GetMapping("/dashboard")
	public String dash(Model model) {
		
		List<Song> allSongs=songser.findAllSong();
		model.addAttribute("allSongs",allSongs);
		return "dashboard.jsp";
	}
	
	
	@GetMapping("/song/new")
	public String newsong(@ModelAttribute("song") Song song) {
		return "create.jsp";
	}
	// Process Expense
			@PostMapping("/process")
			public String createExpense(@Valid @ModelAttribute("song") Song song,
					BindingResult result) {
				if (result.hasErrors()) {
					// retrieve all expenses from db
					
					return "create.jsp";
				}else {
					Song newSong = songser.create(song);
					return "redirect:/dashboard";
				}
				
			}
			
			@GetMapping("/song/{id}")
			public String showSong (@PathVariable("id") Long id,Model model ) {
				Song selectedSong=songser.findSongById(id);
				model.addAttribute("song",selectedSong);
				return "show.jsp";
			}
			
			@DeleteMapping("/song/{id}")
			public String deleteSong (@PathVariable("id") Long id ) {
				songser.deleteSong(id);
				
				return "redirect:/dashboard";
			}
			
			
			public 
}
