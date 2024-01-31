package com.dojo.books.controllers;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.dojo.books.models.Book;
import com.dojo.books.services.BookService;

@Controller
@RequestMapping("/books")
public class BookController {
	
private final BookService bookService;
	
    public BookController(BookService bookService){
        this.bookService = bookService;
    }
    
    

    @GetMapping("")
    public String getAll(Model model) {
    	List<Book> allBooks=bookService.allBooks();
    	model.addAttribute("allBooks", allBooks);
    	return "home.jsp";
    }
	@GetMapping("/create")
	public String displayForm() {
		return "form.jsp";
	}
	@PostMapping("/process")
	public String create(@RequestParam(value = "title") String title,
							@RequestParam(value = "language") String language,
							@RequestParam(value = "numOFPages") int numOFPages,
							@RequestParam(value = "description") String description,Model model) {
		
		Book newBook= new Book(title,description,language,numOFPages);
		bookService.createBook(newBook);
		
		return "redirect:/books";
	}
	
	@GetMapping("/{id}")
	public String findOneBookById(@PathVariable("id") Long id, Model model) {
		Book selectedBook = bookService.findBook(id);
		model.addAttribute("book",selectedBook);
		return "show.jsp";
	}
	
	
	
	
}
